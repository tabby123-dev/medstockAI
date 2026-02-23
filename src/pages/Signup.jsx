import React from "react";
import "./staffDashboard.css";
export default function Signup(){
  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <h3>src/assets/Vaccine Logo Branding.png </h3>
        <ul>
          <li> src/assets/blockbutton.png </li>
          <li>src/assets/greybox.png </li>
          <li>src/assets/greyckock.png</li>
          <li>src/assets/wheelbutton.png</li>
        </ul>
      </div>
      <div className="dashboard-main">
      <div className="top-bar">
        <h2>staffDashboard</h2>
        <p>MON OCT 24,2026</p>
        <div className="profile">Agnes Onu src/assets/avatar.png</div>
        <p>Senior Staff</p>
        <div className="alert-card">
          <h4>src/assets/claimationbutton.png Critical Stock Alerts</h4>
          <p>3 items below threshols,1 expiring in 48h</p>
          <span>ITEM</span>
        </div>
        <div className="actions">
          <button className="btn-primary">Add New Medicine</button>
          <p>Entry and Registry</p>
          <button className="btn-secondary">src/assets/arrowbutton.png Record Movement</button>
          <p>Stock in/out</p>
        </div>
        <div className="pending-card">
          <h4>Pending Approval</h4>
          <span>4 items</span>
          <div className="pending-item">
            <span>src/assets/orangeboard.png Amoxicillin 500mg</span>
            <span>*50 units</span>
            <p> Batch #A*2034 .Recorded 14:30</p>
            <span>.Waiting</span>
          </div>
           <div className="pending-item">
            <span>src/assets/orangeboard.png Paracetamol Syrup</span>
            <p>Batch #PS9881 .Recorded 15:10</p>
            <span>.Waiting</span>
            <span>*12 Bottles</span>
           </div>
            <div className="pending-item">
              <p>src/assets/blueboard.png Insulin Glargine</p>
              <span>Batch #IG0042 .Recorded 15:45</span>
              <span>*5 Kits</span>
              <span>.Draft</span>
            </div>
        </div>
        {/* right panel */}
        <div className="right-panel">
          <h4>Staff Online</h4>
          <p>1/3</p>
          <div className="progress-bar">
            <div className="progress">
            </div>
          </div>
          <p>TEAM</p>
          <span>"Keep maintaing high hygiene standards today"</span>
      </div>
      </div>
    </div>

  );
}