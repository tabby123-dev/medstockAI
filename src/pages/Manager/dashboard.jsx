import React from "react";
import "./manager.css";
import { MdOutlineVaccines } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { GoBellFill } from "react-icons/go";
import { LuArchive } from "react-icons/lu";
import { GiBackwardTime } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";

const Manager = () => {
  return (
    <>
      <div className="body">
        <nav className="nav-links">
          <div className="vaccineSvg">
            <MdOutlineVaccines size={30} />
          </div>
          <div className="navadjustment">
            <div>
              <h2 className="navoversight">Oversight</h2>
            </div>
            <p className="navDate">Monday, 24 May 2024</p>
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
            <section className="assest">
              <div className="dashBoardTotalAssest">
                <div>
                  <h4 className="dashboardassesth4">TOTAL ASSEST</h4>
                </div>
                <p className="dashboardassestfigures">1,284</p>
                <p className="dashboardassestp">+12 new items</p>
              </div>
              <div className="dashBoardActiveAlert">
                <div>
                  <h4 className="dashboardassesth4">ACTIVE ALERT</h4>
                </div>
                <p className="dashboardassestfigures">08</p>
                <p className="dashboardassestp2">Critical urgency</p>
              </div>
            </section>
            <section className="approval-list">
              <div className="list-title">
                <h2 className="approvalListH2">
                  AWAITING APPROVAL <span className="count-badge">3</span>
                </h2>
                <a href="#" className="aprrovalanchor">
                  View All
                </a>
              </div>

              <div className="approval-card">
                <div className="card-top">
                  <div className="med-info">
                    <h3>Amoxicillin 500mg</h3>
                    <span className="sub-label">BATCH: AMX-2024-0012</span>
                  </div>
                  <div className="qty-info">
                    <span className="qty-add">+200</span>
                    <span className="sub-label">Units</span>
                  </div>
                </div>

                <div className="user-strip">
                  <span className="avatar av-green">S</span>
                  <p>
                    Submitted by <strong>Sarah Oklu</strong>
                  </p>
                </div>

                <div className="action-buttons">
                  <button className="btn-dark">Review Details</button>
                  <button className="btn-blue">Approve Entry</button>
                </div>
              </div>

              <div className="approval-card">
                <div className="card-top">
                  <div className="med-info">
                    <h3>Paracetamol (Drops)</h3>
                    <span className="sub-label">BATCH: PAR-9981-X</span>
                  </div>
                  <div className="qty-info">
                    <span className="qty-add">+50</span>
                    <span className="sub-label">Units</span>
                  </div>
                </div>

                <div className="user-strip">
                  <span className="avatar av-blue">A</span>
                  <p>
                    Submitted by <strong>Alex Atsu</strong>
                  </p>
                </div>

                <div className="action-buttons">
                  <button className="btn-dark">Review Details</button>
                  <button className="btn-blue">Approve Entry</button>
                </div>
              </div>
            </section>
            <section>
              <div className="list-title">
                <h2 className="approvalListH2">CRITICAL ALERT</h2>
              </div>
              <div className="criticalalert">
                <div className="dashboardInsulin">
                  <div className="criticalAlertSvg"></div>
                  <h4 className="criticalsecth2">Insulin Glargine</h4>
                  <p className="criticalsectionp">
                    Expiring in 5 days (12 units)
                  </p>
                </div>
                <div className="dashboardInsulin">
                  <div className="criticalAlertSvg2"></div>
                  <h4 className="criticalsecth2">Ventolin Inhaler</h4>
                  <p className="criticalsectionp">Out of stock</p>
                </div>
              </div>
            </section>
            <section className="inventoryHealth">
              <div>
                <div>
                  <h4 className="inventoryh4">Inventory Health</h4>
                  <p className="inventoryp">
                    94% of items are in optimal stock levels.
                  </p>
                </div>
              </div>
              <div className="inventoryHealthRatio">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
                <div className="four"></div>
                <div className="five"></div>
                <div className="six"></div>
                <div className="seven"></div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Manager;
