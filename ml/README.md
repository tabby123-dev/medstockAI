# Demand Forecasting Model (MedStock AI)

This module predicts short-term medicine demand for clinics using historical stock-out (OUT) transaction data.

## Purpose
- Identify fast-moving medicines
- Predict short-term demand (7–30 days)
- Support inventory planning and reduce stock-outs

## Input Data
- MongoDB `stock_movements` collection (OUT movements only)
- Grouped by clinic, medicine, and day

## Model
- Random Forest Regressor
- Features:
  - Lag-1 demand
  - Lag-7 demand
  - Rolling 7-day mean
  - Rolling 14-day mean
  - Day of week

## Output
The model returns:
- Daily demand forecasts
- Aggregated demand per medicine
- Top N medicines predicted to be most in demand

## Integration
This module is designed to be called by the backend service and its outputs stored in a `demand_forecasts` collection.
