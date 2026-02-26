import React from "react";
import "./manager.css";
import { MdOutlineVaccines } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { GoBellFill } from "react-icons/go";
import { LuArchive } from "react-icons/lu";
import { GiBackwardTime } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";

const Entry = () => {
  return (
    <>
      <div className="body">
        <nav className="nav-links">
          <div className="vaccineSvg">
            <MdOutlineVaccines size={30} />
          </div>
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
              <MdDashboard size={25} color="#94A3B8;" />
              <GoBellFill size={25} color="#94A3B8;" />
              <LuArchive size={25} color="#94A3B8;" />
              <GiBackwardTime size={25} color="#94A3B8;" />
            </div>
            <div className="navLogoSec">
              <IoSettings size={25} color="#94A3B8;" />
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
              <button className="entryBigBtt">
                Authorize & Add to Live Stock
              </button>
            </div>
            <footer className="footerDiv">
              <div className="entryBlackBox"></div>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default Entry;
