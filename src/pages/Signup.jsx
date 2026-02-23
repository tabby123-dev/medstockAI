import React from "react";
import "./SignUp.css";
import vaccineLogo from "../assets/Vaccine Logo Branding.png";
import blockButton from "../assets/blockbutton.png";
import greyBox from "../assets/greybox.png";
import greyClock from "../assets/greyckock.png";
import wheelButton from "../assets/wheelbutton.png";
import avatar from "../assets/avatar.png";
import claimationButton from "../assets/claimationbutton.png";
import arrowButton from "../assets/arrowbutton.png";
import orangeBoard from "../assets/orangeboard.png";
import blueBoard from "../assets/blueboard.png";

export default function Signup(){
  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <img src={vaccineLogo} alt="Vaccine Logo" style={{maxWidth: '150px'}} />
        <h3>Vaccine Stock Management</h3>
        <ul>

          <li><img src={blockButton} alt="Block Button" /></li>
          <li><img src={greyBox} alt="Grey Box" /></li>
          <li><img src={greyClock} alt="Grey Clock" /></li>
          <li><img src={wheelButton} alt="Wheel Button" /></li>
        </ul>
      </div>
      <div className="dashboard-main">
      <div className="top-bar">
        <h2>staffDashboard</h2>
        <p>MON OCT 24,2026</p>
        <div className="profile">
          <img src={avatar} alt="Agnes Onu Avatar" style={{width: '40px', borderRadius: '50%'}} />
          <span>Agnes Onu</span>
        </div>
        <p>Senior Staff</p>
        <div className="alert-card">
          <h4><img src={claimationButton} alt="Alert" style={{width: '20px'}} /> Critical Stock Alerts</h4>
          <p>3 items below thresholds, 1 expiring in 48h</p>
          <span>ITEM</span>
        </div>
        <div className="actions">
          <button className="btn-primary">Add New Medicine</button>
          <p>Entry and Registry</p>
          <button className="btn-secondary">
            <img src={arrowButton} alt="Arrow" style={{width: '20px'}} /> Record Movement
          </button>
          <p>Stock in/out</p>
        </div>
        <div className="pending-card">
          <h4>Pending Approval</h4>
          <span>4 items</span>
          <div className="pending-item">
            <img src={orangeBoard} alt="Medicine" style={{width: '30px'}} />
            <span>Amoxicillin 500mg</span>
            <span>*50 units</span>
            <p>Batch #A2034 • Recorded 14:30</p>
            <span>.Waiting</span>
          </div>
          <div className="pending-item">
            <img src={orangeBoard} alt="Medicine" style={{width: '30px'}} />
            <span>Paracetamol Syrup</span>
            <p>Batch #PS9881 • Recorded 15:10</p>
            <span>.Waiting</span>
            <span>*12 Bottles</span>
          </div>
          <div className="pending-item">
            <img src={blueBoard} alt="Medicine" style={{width: '30px'}} />
            <p>Insulin Glargine</p>
            <span>Batch #IG0042 • Recorded 15:45</span>
            <span>*5 Kits</span>
            <span>.Draft</span>
          </div>
        </div>
        <div className="right-panel">
          <h4>Staff Online</h4>
          <p>1/3</p>
          <div className="progress-bar">
            <div className="progress">
            </div>
          </div>
          <p>TEAM</p>
          <span>"Keep maintaining high hygiene standards today"</span>
        </div>
      </div>
      </div>
    </div>

  );
}