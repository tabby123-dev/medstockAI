import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="welcomepageNav">
        <div>
          <h3>MedStock AI</h3>
        </div>
        <div>
          <button
            onClick={() => navigate("/signin")}
            className="welcomepageNavSignin"
          >
            sign up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="welcomePageNavLogin"
          >
            Login
          </button>
        </div>
      </nav>
      <div className="welcomePageHero">
        <h1 className="welcomePageHeroH1">Pharmacy Inventory Management</h1>
        <p className="welcomePageHeroP">
          Streamline your pharmacy operations with AI- <br /> powered stock
          management, demand forecasting,
          <br /> and real-time alerts.
        </p>
        <button
          onClick={() => navigate("/signin")}
          className="welcomePageHeroGetStarted"
        >
          Get Started
        </button>
      </div>
      <section className="smartSection">
        <div className="smartSectionImage">
          <img src="../" alt="" />
        </div>
        <h2 className="smartSectionH2">Smart Inventory Tracking</h2>
        <p>
          Track medicines with batch numbers, expiry dates, and real-time stock
          levels across multiple locations.
        </p>
      </section>
      <section className="secondSection">
        <div className="forcastDiv">
          <div className="aiImageDiv">
            <img src="" alt="" />
          </div>
          <h3>AI Forecasts</h3>
          <p>Predict demand spikes</p>
        </div>
        <div className="stocks">
          <div className="aiImageDiv2">
            <img src="" alt="" />
          </div>
          <h3>Stock Alerts</h3>
          <p>Never run out of stock</p>
        </div>
      </section>
      <search className="pharmacy">
        <h3 className="pharmacyH2">PHARMACY HEALTH</h3>
        <div className="pharmacyScore">
          <h2>98.2%</h2>
          <div className="pharmacyP">
            <p>2.4%</p>
          </div>
        </div>
        <hr />
        <p className="util">UTILIZATION</p>
      </search>
      <section className="createdWithAi">
        <div>
          <img src="" alt="" />
          <h3>Created with MedStock AI</h3>
        </div>
        <button
          onClick={() => navigate("/signin")}
          className="createWithAiButton"
        >
          Get Started
        </button>
      </section>
      <footer className="welcomePagefooter">
        <div className="welcomePageDiv">
          <div>
            <h4>500+</h4>
            <p>Pharmacies</p>
          </div>
          <div>
            <h4>1M+</h4>
            <p>Items Tracked</p>
          </div>
          <div>
            <h4>99.9%</h4>
            <p>Accuracy</p>
          </div>
        </div>
        <p>© 2024 MedStock AI. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Welcome;
