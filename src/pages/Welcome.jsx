import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="welcomepageNav">
        <div>MedStock AI</div>
        <div>
          <button onClick={() => navigate("/signin")}>signin</button>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </nav>
      <div className="welcomePageHero">
        <h1>Pharmacy Inventory Management</h1>
        <p>
          Streamline your pharmacy operations with AI- powered stock management,
          demand forecasting, and real-time alerts.
        </p>
        <button onClick={() => navigate("/signin")}>Get Started</button>
      </div>
      <section>
        <div>
          <img src="../" alt="" />
        </div>
        <h2>Smart Inventory Tracking</h2>
        <p>
          Track medicines with batch numbers, expiry dates, and real-time stock
          levels across multiple locations.
        </p>
      </section>
      <section>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <h3>AI Forecasts</h3>
          <p>Predict demand spikes</p>
        </div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <h3>Stock Alerts</h3>
          <p>Never run out of stock</p>
        </div>
      </section>
      <search>
        <h3>Pharmacy Health</h3>
        <div>
          <h2>98.2%</h2>
          <p>2.4%</p>
        </div>
        <hr />
        <p>Utilization</p>
      </search>
      <section>
        <div>
          <img src="" alt="" />
          <h3>Created with MedStock AI</h3>
        </div>
        <button onClick={() => navigate("/signin")}>Get Started</button>
      </section>
      <footer>
        <div>
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
