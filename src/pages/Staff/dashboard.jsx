import React from "react";
import "./staff.css";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* left panel */}
      <div className="left-panel">
        {/* logo */}
        <div className="logo">
          <img src="/src/assets/Vaccine Logo Branding.png" alt="Vaccine Logo Branding - Medical inventory application" />
        </div>
        {/* Navigation icons */}
        <div className="nav-icons">
          <div className="nav-item active">
            <img src="/src/assets/blockbutton.png" alt="Dashboard - currently selected navigation item" />
          </div>
          <div className="nav-item">
            <img src="/src/assets/greybell.png" alt="Notifications navigation button" />
          </div>
          <div className="nav-item">
            <img src="/src/assets/greybox.png" alt="Inbox navigation button" />
          </div>
          <div className="nav-item">
            <img src="/src/assets/wheelbutton.png" alt="Settings navigation button" />
          </div>
        </div>
      </div>

      {/* middle panel */}
      <div className="middle-panel">
        {/* topbar */}
        <div className="staff-header">
          <div className="header-left">
          <h2>Staff Dashboard</h2>
          <p className="date-text">MON OCT 24,2026</p>
          </div>
          <div className="header-right">
            <div className="user-info">
              <p className="user-name">Agnes Onu</p>
              <span className="user-role">senior staff</span>
            </div>
            <div className="avatar">
              <img src="/src/assets/avatar.png" alt="Agnes Onu user profile avatar"/>
            </div>
          </div>
        </div>
  
      {/* Critical Alert */}
      <div className="alert-card">
        <div className="alert-left">
          <div className="alert-icon">
            <img src="/src/assets/alertbutton.png" alt="Alert" style={{width: '22px', height: '22px'}} />
          </div>
          <div>
            <h3>Critical Stock Alerts</h3>
            <p>3 items below threshold, 1 expiring in 48h</p>
          </div>
        </div>
        <button className="view-btn">VIEW</button>
      </div>

      {/* Action Cards */}
      <div className="content-wrapper">
      <div className="actions">
        <div className="card primary">
          <img src="/src/assets/whiteicon.png" alt="Add Medicine" style={{width: '26px', height: '26px'}} />
          <h3>Add New Medicine</h3>
          <p>Entry & Registry</p>
        </div>

        <div className="card secondary">
          <img src="/src/assets/arrowbutton.png" alt="Record Movement" style={{width: '26px', height: '26px'}} />
          <h3>Record Movement</h3>
          <p>Stock In/Out</p>
        </div>
      </div>

      {/* Pending Section */}
      <div className="pending-section">

        <div className="pending-header">
          <h4>PENDING APPROVAL</h4>
          <span className="badge">4 Items</span>
        </div>

        {/* Item 1 */}
        <div className="item">
          <div className="item-left">
            <div className="item-icon orange">
              <img src="/src/assets/orangeboard.png" alt="Inventory" style={{width: '20px', height: '20px'}} />
            </div>
            <div>
              <h5>Amoxicillin 500mg</h5>
              <p>Batch #AX2034 • Recorded 14:30</p>
            </div>
          </div>
          <div className="item-status">
            <h5>x50 Units</h5>
            <span className="waiting">● Waiting</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="item">
          <div className="item-left">
            <div className="item-icon orange">
              <img src="/src/assets/orangeboard.png" alt="Inventory" style={{width: '20px', height: '20px'}} />
            </div>
            <div>
              <h5>Paracetamol Syrup</h5>
              <p>Batch #PS9881 • Recorded 15:10</p>
            </div>
          </div>
          <div className="item-status">
            <h5>x12 Bottles</h5>
            <span className="waiting">● Waiting</span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="item">
          <div className="item-left">
            <div className="item-icon blue">
              <img src="/src/assets/blueboard.png" alt="Inventory" style={{width: '20px', height: '20px'}} />
            </div>
            <div>
              <h5>Insulin Glargine</h5>
              <p>Batch #IG0042 • Recorded 15:45</p>
            </div>
          </div>
          <div className="item-status">
            <h5>x5 Kits</h5>
            <span className="draft">● Draft</span>
          </div>
        </div>
      </div>
      </div>
      </div>

      {/* Right panel */}
      <div className="right-panel">
        <p className="right-title">Staff Online</p>
        <h2 className="staff-count">1/3</h2>
        {/* progress bar */}
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <p className="team-text">TEAM</p>
        <p className="team-subtext">Keep maintaining high hygiene standards today</p>
      </div>
    </div>
  );
}