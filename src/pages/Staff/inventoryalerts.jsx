import React from "react";
import "./App.css";

import logo from "./assets/logo.png";
import dashboard from "./assets/dashboard.png";
import alertsIcon from "./assets/alerts.png";
import stock from "./assets/stock.png";
import settings from "./assets/settings.png";
import user from "./assets/user.png";

import filterIcon from "./assets/filter.png";
import cardAlertIcon from "./assets/card-alert.png";
import cardWarningIcon from "./assets/card-warning.png";

import alertRed from "./assets/alert-red.png";
import alertOrange from "./assets/alert-orange.png";
import alertYellow from "./assets/alert-yellow.png";
import alertTemp from "./assets/alert-temp.png";

function App() {
  return (
    <div className="app">

      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="logo">
          <img src={src/assets/logo.png} alt="MedStock AI Logo" />
          <h2>MedStock AI</h2>
        </div>

        <ul className="nav">
          <li>
            <img src={src/assets/dashboard.png} alt="Dashboard Icon" />
            Dashboard
          </li>
          <li className="active">
            <img src={src/assets/alert Icon.png} alt="Alerts Icon" />
            Alerts
          </li>
          <li>
            <img src={src/assets/stock.png} alt="Stock Icon" />
            Stock
          </li>
          <li>
            <img src={src/assets/settings (7).png} alt="Settings Icon" />
            Settings
          </li>
        </ul>

        <div className="user">
          <img src={src/assets/user.png} alt="User Profile" />
          <span>Agnes Onu</span>
        </div>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* HEADER */}
        <div className="top-bar">
          <div>
            <h1>Inventory Alerts</h1>
            <p>Critical monitoring of medical supplies</p>
          </div>

          <div className="right-top">
            <button className="filter-btn">
              <img src={src/assets/filter.png} alt="Filter Icon" />
              Filter
            </button>
            <button className="update-btn">
                <img src={src/assets/update.png}alt="Update Icon" />
            <span className="updated">Last updated: Just now</span>
            </button>
          </div>
        </div>

        {/* SUMMARY CARDS */}
        <div className="summary">

          <div className="card red">
            <div>
              <span className="card-label">ACTION REQUIRED</span>
              <h2>08</h2>
              <p>Critical Shortages</p>
            </div>
            <img src={src/assets/criticalAlert.png} alt="Critical Alert Icon" />
          </div>

          <div className="card orange">
            <div>
              <span className="card-label">EXPIRING SOON</span>
              <h2>14</h2>
              <p>Warning Threshold</p>
            </div>
            <img src={src/assets/warning.png} alt="Warning Icon" />
          </div>

        </div>
        {/* ALERTS BOX */}
        <div className="alerts-box">

          <div className="alerts-header">
            <h3>Active Alerts Queue</h3>
            <span className="sort">SORT BY: PRIORITY</span>
          </div>

          {/* ALERT ITEM 1 */}
          <div className="alert-item">
            <div className="alert-left">
              <div className="icon red-bg">
                <img src={src/assets/alertRed.png} alt="Expiring Icon" />
              </div>
              <div>
                <strong>
                  Moderna Spikevax - Batch 4022
                  <span className="badge red-badge">EXPIRING 24H</span>
                </strong>
                <p>Fridge 2, Shelf B • Qty: 15 Vials</p>
              </div>
            </div>
            <button className="btn blue">Resolve</button>
          </div>

          {/* ALERT ITEM 2 */}
          <div className="alert-item">
            <div className="alert-left">
              <div className="icon orange-bg">
                <img src={src/assets/alertOrange.png} alt="Low Stock Icon" />
              </div>
              <div>
                <strong>
                  Saline Solution (500ml)
                  <span className="badge orange-badge">CRITICAL LOW</span>
                </strong>
                <p>8 units left (Min: 50)</p>
              </div>
            </div>
            <button className="btn orange-btn">Order Now</button>
          </div>

          {/* ALERT ITEM 3 */}
          <div className="alert-item">
            <div className="alert-left">
              <div className="icon yellow-bg">
                <img src={src/assets/alertYellow.png} alt="Warning Icon" />
              </div>
              <div>
                <strong>
                  Hepatitis B Pediatric
                  <span className="badge gray-badge">7 DAYS LEFT</span>
                </strong>
                <p>Clinic Room A • Qty: 42 Doses</p>
              </div>
            </div>
            <button className="btn teal">Mark Verified</button>
          </div>

          {/* ALERT ITEM 4 */}
          <div className="alert-item">
            <div className="alert-left">
              <div className="icon red-bg">
                <img src={src/assets/alertTemp.png} alt="Temperature Warning Icon" />
              </div>
              <div>
                <strong>
                  Insulin Aspart - Cold Chain Alert
                  <span className="badge red-badge">TEMP WARNING</span>
                </strong>
                <p>+8.2°C (Exceeds Limit)</p>
              </div>
            </div>
            <button className="btn red-btn">Audit Now</button>
          </div>

        </div>

        <button className="floating-btn">+</button>

      </div>
    </div>
  );
}

export default App;