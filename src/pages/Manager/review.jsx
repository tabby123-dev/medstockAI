import React from "react";
import { FaLessThan } from "react-icons/fa";

import "./manager.css";

const review = () => {
  return (
    <div className="reviewbody">
      <nav className="reviewNavlinks">
        <div className="reviewOversightDiv">
          <FaLessThan color="#94A3B8" size={19.97} />
          <h3 className="reviewNavOversighth2">Review Entry</h3>
        </div>
      </nav>
      <div className="reviewAppLayout">
        <aside className="reviewSidebar">
          <div className="reviewLogoBox">
            <img src="" className="sidebar-icon" />
          </div>
        </aside>
        <div className="reviewMain">
          <div className="reviewSectionHeader">
            <h2 className="reviewSectionAmoxi">Amoxicillin 500mg</h2>
            <p className="reviewSectionAmoxiP">
              <span className="reviewSectionAmoxiSpan">PENDING REVIEW</span> •
              Submitted 2h ago
            </p>
          </div>

          <section>
            <div className="batchSection">
              <div>
                <div>
                  <h4>BATCH NUMBER</h4>
                  <p>AMX-2024-0012</p>
                </div>
                <div>
                  <h4>QUANTITY</h4>
                  <p>+200 Units</p>
                </div>
              </div>
              <div>
                <h4>SUBMISSION HISTORY</h4>
                <div>
                  <p>Nurse Ugo Connor</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default review;
