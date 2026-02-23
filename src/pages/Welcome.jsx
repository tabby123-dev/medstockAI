import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiMiniBellAlert } from "react-icons/hi2";
import { MdOutlineInventory } from "react-icons/md";
import { RiFolder2Fill } from "react-icons/ri";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="welcomepageNav">
        <div className="navMedstock">
          <RiFolder2Fill size={25} />
          <h3 className="navh3">MedStock AI</h3>
        </div>
        <div className="authButtonContainer">
          <button
            onClick={() => navigate("/signin")}
            className="welcomePageNavLogin"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="welcomepageNavSignup"
          >
            Sign Up
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
          <MdOutlineInventory color="#FFFFFF" size={25} />
        </div>
        <h2 className="smartSectionH2">Smart Inventory Tracking</h2>
        <p className="smartSectionp">
          Track medicines with batch numbers, expiry dates, and real-time stock
          levels across multiple locations.
        </p>
      </section>
      <section className="secondSection">
        <div className="forcastDiv">
          <div className="aiImageDiv">
            <FaArrowTrendUp color="#2A5C82" size={20} />
          </div>
          <h3 className="forcasth3">AI Forecasts</h3>
          <p className="forcastp">Predict demand spikes</p>
        </div>
        <div className="stocks">
          <div className="aiImageDiv2">
            <HiMiniBellAlert color="#DC2626" size={20} />
          </div>
          <h3 className="forcasth3">Stock Alerts</h3>
          <p className="forcastp">Never run out of stock</p>
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
        <p className="util">UTILIZATION</p>
      </search>
      <section className="createdWithAi">
        <div>
          {/* <img src="" alt="" /> */}
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
