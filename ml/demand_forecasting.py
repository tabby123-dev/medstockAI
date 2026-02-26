# =========================
# MedStock AI: Forecasting Pipeline (MongoDB -> Model -> MongoDB)
# By data science track.
# =========================

from pymongo import MongoClient
import certifi
import pandas as pd
import numpy as np

from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

from datetime import datetime


# -------------------------
# 1) CONNECT TO MONGODB ATLAS
# -------------------------
MONGO_URI = "mongodb+srv://medstock_db:CodkJxBKPngUpUtn@cluster0.l5lhkpf.mongodb.net/"

client = MongoClient(
    MONGO_URI,
    tls=True,
    tlsCAFile=certifi.where(),
    serverSelectionTimeoutMS=30000
)

# Test the connection early
print("Pinging MongoDB...")
print(client.admin.command("ping"))  # should output {'ok': 1.0}

db = client["medstock_db"]


# -------------------------
# 2) READ STOCK MOVEMENTS (DEMAND = OUT)
# -------------------------
cursor = db["stock_movements"].find(
    {"MovementType": "stock_out"},
    {"_id": 0, "clinic_id": 1, "medicine_id": 1, "quantity": 1, "date": 1}
)

mov = pd.DataFrame(list(cursor))
#print("Sample movements:")
print(mov.head())
if mov.empty:
    raise ValueError("No OUT stock movements found. Cannot train forecasting model.")

mov["date"] = pd.to_datetime(mov["date"], errors="coerce")
mov = mov.dropna(subset=["date"])  # drop bad dates

print("Sample movements:")
print(mov.head())


# -------------------------
# 3) AGGREGATE INTO DAILY USAGE
# -------------------------
mov["day"] = mov["date"].dt.date
daily = (
    mov.groupby(["clinic_id", "medicine_id", "day"])["quantity"]
    .sum()
    .reset_index()
)
daily["day"] = pd.to_datetime(daily["day"])
daily.rename(columns={"quantity": "qty_used"}, inplace=True)

print("\nDaily aggregated sample:")
print(daily.head())


# -------------------------
# 4) FILL MISSING DAYS WITH 0 (PER clinic_id + medicine_id)
# -------------------------
all_series = []

for (c, m), grp in daily.groupby(["clinic_id", "medicine_id"]):
    grp = grp.sort_values("day").set_index("day")

    # Create continuous daily range for THIS series only
    full_range = pd.date_range(grp.index.min(), grp.index.max(), freq="D")

    # Fill missing days with 0
    grp = grp.reindex(full_range).fillna(0)

    grp.index.name = "day"
    grp = grp.reset_index()
    grp["clinic_id"] = c
    grp["medicine_id"] = m
    grp.rename(columns={"qty_used": "qty_used"}, inplace=True)

    # after reindex, the qty_used column may be unnamed in some cases
    # handle that safely:
    if "qty_used" not in grp.columns:
        # assume the usage values ended up in column 0
        grp.rename(columns={0: "qty_used"}, inplace=True)

    all_series.append(grp)

daily_full = pd.concat(all_series, ignore_index=True)

# Ensure correct types
daily_full["qty_used"] = pd.to_numeric(daily_full["qty_used"], errors="coerce").fillna(0)
daily_full = daily_full.sort_values(["clinic_id", "medicine_id", "day"])

print("\nDaily (continuous) sample:")
print(daily_full.head())


# -------------------------
# 5) SELECT ONE SERIES TO TRAIN (BEGINNER + FAST)
# -------------------------
clinic_id = daily_full["clinic_id"].iloc[0]
medicine_id = daily_full["medicine_id"].iloc[0]

ts = daily_full[
    (daily_full["clinic_id"] == clinic_id) &
    (daily_full["medicine_id"] == medicine_id)
].copy()

ts = ts.sort_values("day").reset_index(drop=True)

print(f"\nTraining series: clinic_id={clinic_id}, medicine_id={medicine_id}")
print(ts.head())


# -------------------------
# 6) FEATURE ENGINEERING (LAGS + ROLLING MEANS + DAY OF WEEK)
# -------------------------
ts["lag_1"] = ts["qty_used"].shift(1)
ts["lag_7"] = ts["qty_used"].shift(7)

ts["roll7_mean"] = ts["qty_used"].shift(1).rolling(7).mean()
ts["roll14_mean"] = ts["qty_used"].shift(1).rolling(14).mean()

ts["dow"] = ts["day"].dt.dayofweek

ts_model = ts.dropna().copy()

features = ["lag_1", "lag_7", "roll7_mean", "roll14_mean", "dow"]


# -------------------------
# 7) TIME-BASED TRAIN/TEST SPLIT
# -------------------------
split = int(len(ts_model) * 0.8)
train = ts_model.iloc[:split]
test = ts_model.iloc[split:]

X_train, y_train = train[features], train["qty_used"]
X_test, y_test = test[features], test["qty_used"]


# -------------------------
# 8) BASELINE (ROLLING 7 MEAN)
# -------------------------
baseline_pred = test["roll7_mean"]
baseline_mae = mean_absolute_error(y_test, baseline_pred)
print("\nBaseline MAE (roll7_mean):", baseline_mae)


# -------------------------
# 9) RANDOM FOREST MODEL
# -------------------------
rf = RandomForestRegressor(
    n_estimators=200,
    random_state=42
)
rf.fit(X_train, y_train)

rf_pred = rf.predict(X_test)
rf_mae = mean_absolute_error(y_test, rf_pred)

print("RandomForest MAE:", rf_mae)


# -------------------------
# 10) FORECAST NEXT 30 DAYS (RECURSIVE)
# -------------------------
def forecast_next_days(history_df: pd.DataFrame, model, n_days: int = 30) -> pd.DataFrame:
    """
    Recursive 1-step-ahead forecasting:
    use last known values to build features for the next day,
    predict next day, append, repeat.
    """
    df = history_df[["day", "qty_used"]].copy().sort_values("day").reset_index(drop=True)

    forecasts = []

    for _ in range(n_days):
        last_day = df["day"].iloc[-1]
        next_day = last_day + pd.Timedelta(days=1)

        qty = df["qty_used"]

        lag_1 = float(qty.iloc[-1])
        lag_7 = float(qty.iloc[-7]) if len(qty) >= 7 else float(qty.mean())

        roll7 = float(qty.iloc[-7:].mean())
        roll14 = float(qty.iloc[-14:].mean()) if len(qty) >= 14 else float(qty.mean())

        dow = int(next_day.dayofweek)

        X_next = pd.DataFrame([{
            "lag_1": lag_1,
            "lag_7": lag_7,
            "roll7_mean": roll7,
            "roll14_mean": roll14,
            "dow": dow
        }])

        pred = float(model.predict(X_next)[0])
        pred = max(0.0, pred)

        new_row = {"day": next_day, "qty_used": pred}
        df = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)
        forecasts.append(new_row)

    return pd.DataFrame(forecasts)

next_30 = forecast_next_days(ts_model, rf, n_days=30)
print("\nNext 30-day forecast sample:")
print(next_30.head())


# -------------------------
# 11) WRITE FORECAST BACK TO MONGODB (UPSERT)
# -------------------------
predictions_list = [
    {"date": d.strftime("%Y-%m-%d"), "predicted_qty": float(q)}
    for d, q in zip(next_30["day"], next_30["qty_used"])
]

forecast_doc = {
    "clinic_id": str(clinic_id),
    "medicine_id": str(medicine_id),
    "horizon_days": 30,
    "generated_at": datetime.utcnow().isoformat() + "Z",
    "model_version": "rf_lags_v1",
    "metrics": {
        "baseline_mae": float(baseline_mae),
        "rf_mae": float(rf_mae)
    },
    "predictions": predictions_list,
    "summary": {
        "predicted_total": float(sum(p["predicted_qty"] for p in predictions_list)),
        "avg_daily": float(np.mean([p["predicted_qty"] for p in predictions_list]))
    }
}

result = db.demand_forecasts.replace_one(
    {
        "clinic_id": forecast_doc["clinic_id"],
        "medicine_id": forecast_doc["medicine_id"],
        "horizon_days": forecast_doc["horizon_days"]
    },
    forecast_doc,
    upsert=True
)

print("\nForecast upsert result:")
print("matched:", result.matched_count, "modified:", result.modified_count, "upserted_id:", result.upserted_id)

print("\nDone.")
