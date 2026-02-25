import React from "react";
import "./manager.css";

const Entry = () => {
  return (
    <>
      <div className="body">
        <nav className="nav-links">
          <div className="entryNav">
            <h2 className="entryNavH2">Add New Medicine</h2>
            <div className="entryNavP">
              <p className="navDate">MANAGER ACCESS</p>
            </div>
          </div>
        </nav>
        <div className="app-layout">
          <aside className="sidebar">
            <div className="logo-box">
              <img src="" alt="Logo" className="sidebar-icon" />
            </div>
          </aside>
          <main className="main-content">
            <div>
              <h2 className="directEntry">Direct Inventory Entry</h2>
              <p className="directEntryP">Manual stock addition.</p>
            </div>
            <div>
              <div className="manualSubDiv">
                <h4 className="manualEntryH4">MEDICINE NAME</h4>
                <div className="manualEntrydivs">
                  <p>e.g. Amoxicillin 500mg Capsule</p>
                </div>
              </div>
              <div className="manualSubDiv">
                <h4 className="manualEntryH4">BATCH NUMBER</h4>
                <div className="manualEntrydivs">
                  <p>LOT-2024-001</p>
                </div>
              </div>
              <div className="manualSubDiv">
                <h4 className="manualEntryH4">Supplier</h4>
                <div className="manualEntrydivs">
                  <p className="entrySupplierP">Select Supplier</p>
                </div>
              </div>
              <div className="manualSubDivTwin">
                <div className="entryQuatityDiv">
                  <h4 className="manualEntryH4">INITIAL QUANTITY</h4>
                  <div className="manualEntrydivs QTY">
                    <p>0</p>
                    <p>UNITS</p>
                  </div>
                </div>
                <div className="entryExpiryDate">
                  <h4 className="manualEntryH4">MEDICINE NAME</h4>
                  <div className="manualEntrydivs">
                    <p className="entrySupplierP">MM/DD/YYY</p>
                  </div>
                </div>
              </div>
              <div className="entrydirectAid">
                <div>
                  <p className="directaidp">Direct Aid</p>
                </div>
              </div>
              <div className="entryAuthority">
                <div className="Authorisedby">
                  <p>Authorized by:</p>
                  <p>Security Protocol:</p>
                </div>
                <div className="authourisedbymanager">
                  <p className="AutbyMp">Manager #88291</p>
                  <p className="AutbyMp1">ENCRYPTED_L3</p>
                </div>
              </div>
            </div>
            <div className="entryBigButon">
                <button className="entryBigBtt">Authorize & Add to Live Stock</button>
            </div>
            <footer className="footerDiv">
                    <div className="entryBlackBox">

                    </div>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default Entry;
