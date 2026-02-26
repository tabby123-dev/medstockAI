import React from "react";
import { MdOutlineVaccines } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { GoBellFill } from "react-icons/go";
import { LuArchive } from "react-icons/lu";
import { GiBackwardTime } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";

const History = () => {
  return (
    <>
      <div className="body">
        <nav className="nav-links">
          <div className="vaccineSvg">
            <MdOutlineVaccines size={30} />
          </div>
          <div className="hisnav">
            <h2 className="historynavh2">Request History</h2>
            <p className="navDate">HISTORICAL LOG</p>
          </div>

          <div className="historicalSearchBar">
            <p>Search by ID, Submitter or Item...</p>
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
            <section>
              <div className="historyapprovalbutton">
                <button className="historyNavButton">All Requests</button>
                <button className="historyNavButton">Approved</button>
                <button className="historyNavButton">Pending</button>
                <button className="historyNavButton">Rejected</button>
              </div>
            </section>
            <section className="historyapprovalsections">
              <div className="historyapprovalsubsection">
                <div className="approvalFirstInnerDiv">
                  <div>
                    <p className="historyRegID">#REQ-2024-089</p>
                    <h3 className="historyreviewh3">
                      Amoxicillin 500mg (x200)
                    </h3>
                  </div>
                  <div className="coloredtextwrapper">
                    <p className="historyapprovalsection">APPROVED</p>
                  </div>
                </div>
                <div className="historysubmitsection">
                  <div>
                    <p className="submitterp">Submitter</p>
                    <p className="submittername">Sarah Connor</p>
                  </div>
                  <div className="historysubmitdate">
                    <p className="submitterp">Date</p>
                    <p className="submittername">22 May 2024</p>
                  </div>
                </div>
                <div className="historyrevirewsection">
                  <p>Review Details</p>
                </div>
              </div>
              <div className="historyapprovalsubsection">
                <div className="approvalFirstInnerDiv">
                  <div>
                    <p className="historyRegID">#REQ-2024-085</p>
                    <h3 className="historyreviewh3">Insulin Pens (x12)</h3>
                  </div>
                  <div className="coloredtextwrapperPEN">
                    <p className="historyapprovalsectionPEN">PENDING</p>
                  </div>
                </div>
                <div className="historysubmitsection">
                  <div>
                    <p className="submitterp">Submitter</p>
                    <p className="submittername">Alex Reed</p>
                  </div>
                  <div className="historysubmitdate">
                    <p className="submitterp">Date</p>
                    <p className="submittername">22 May 2024</p>
                  </div>
                </div>
                <div className="historyrevirewsection">
                  <p>Review Details</p>
                </div>
              </div>
              <div className="historyapprovalsubsection">
                <div className="approvalFirstInnerDiv">
                  <div>
                    <p className="historyRegID">#REQ-2024-081</p>
                    <h3 className="historyreviewh3">
                      Medical N95 Masks (x500)
                    </h3>
                  </div>
                  <div className="coloredtextwrapperRed">
                    <p className="historyapprovalsectionRED">REJECTED</p>
                  </div>
                </div>
                <div className="historysubmitsection">
                  <div>
                    <p className="submitterp">Submitter</p>
                    <p className="submittername">John Doe</p>
                  </div>
                  <div className="historysubmitdate">
                    <p className="submitterp">Date</p>
                    <p className="submittername">15 May 2024</p>
                  </div>
                </div>
                <div className="historyrevirewsection">
                  <p>Review Details</p>
                </div>
              </div>
              <div className="historyapprovalsubsection">
                <div className="approvalFirstInnerDiv">
                  <div>
                    <p className="historyRegID">#REQ-2024-079</p>
                    <h3 className="historyreviewh3">Paracetamol Drops (x50)</h3>
                  </div>
                  <div className="coloredtextwrapper">
                    <p className="historyapprovalsection">APPROVED</p>
                  </div>
                </div>
                <div className="historysubmitsection">
                  <div>
                    <p className="submitterp">Submitter</p>
                    <p className="submittername">Alex Reed</p>
                  </div>
                  <div className="historysubmitdate">
                    <p className="submitterp">Date</p>
                    <p className="submittername">15 May 2024</p>
                  </div>
                </div>
                <div className="historyrevirewsection">
                  <p>Review Details</p>
                </div>
              </div>
            </section>
            <section>
              <div className="historyviewmore">
                <button className="historyviewmoreButton">
                  View More Records
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default History;
