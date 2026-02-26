import React from "react";
import { FaLessThan } from "react-icons/fa";

import "./manager.css";
import { MdOutlineVaccines } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { GoBellFill } from "react-icons/go";
import { LuArchive } from "react-icons/lu";
import { GiBackwardTime } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";

const review = () => {
  return (
    <div className="reviewbody">
      <nav className="reviewNavlinks">
        <div className="vaccineSvg">
          <MdOutlineVaccines size={30} />
        </div>
        <div className="reviewOversightDiv">
          <FaLessThan color="#94A3B8" size={19.97} />
          <h3 className="reviewNavOversighth2">Review Entry</h3>
        </div>
      </nav>
      <div className="reviewAppLayout">
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
              <div className="batchNumber">
                <div>
                  <h4 className="batchNumberH4">BATCH NUMBER</h4>
                  <p className="batchNumberp">AMX-2024-0012</p>
                </div>
                <div className="batchNumberDiv2">
                  <h4 className="batchNumberH4">QUANTITY</h4>
                  <p className="batchNumberp2">+200 Units</p>
                </div>
              </div>
              <div>
                <h4 className="reviewExpiryDate">EXPIRY DATE</h4>
                <div>
                  <p className="reviewExpiryDatep">12 Oct 2026</p>
                </div>
              </div>
              <div className="submissionhistory">
                <h4 className="submissionhistoryh4">SUBMISSION HISTORY</h4>
                <div>
                  <p className="submissionhistoryp">Nurse Ugo Connor</p>
                </div>
                <div className="submissionistoryblackbox"></div>
              </div>
            </div>
          </section>
          <section>
            <div className="reviewsectionID">
              <div className="ID">
                <h4>System Log ID:</h4>
                <h4>Documentation:</h4>
              </div>
              <div className="ID2">
                <p className="reviewsectionIDp">#LOG-88291-ZX</p>
                <p className="reviewsectionIDp2">Invoice_AMX_012.pdf</p>
              </div>
            </div>
          </section>
          <section>
            <div className="footersection">
              <button className="footersectionBuutton">
                Approve & Add to Stock
              </button>
              <button className="footersectionBuutton2">Reject Entry</button>
              <div className="emtydiv"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default review;
