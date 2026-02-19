import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { getDashboardPath } from "../components/ProtectedRoute";

export default function Signin() {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { email, password } = loginDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.post(`${apiURL}/auth/login`, loginDetails);

      const accessToken = response.data.access_token;
      const user = response.data.user;

      login(accessToken, user);

      navigate(getDashboardPath(user.role), { replace: true });
    } catch (error) {
      console.error(error);
      setErrorMessage("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signinDashBorad">
      <div className="signinSubDashBoard">
        <div className="SigninSvgDiv"></div>
        <h1>MedStock AI</h1>
        <p className="signinPTag">INVENTORY SYSTEM</p>

        <div className="signinFormWrapper">
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">EMAIL ADDRESS</label> <br />
              <input
                className="signinIput"
                placeholder="MANAGER@HOSPITAL.COM"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="signinLables">
              <label htmlFor="password">PASSWORD</label> <br />
              <input
                className="signinIput"
                placeholder="........"
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <p className="singinforgotpassword">FORGOT PASSWORD?</p>

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <button type="submit" disabled={loading} className="signinButton">
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
        <p className="signinOptions">
          Don't have an account?{" "}
          <span>
            <button className="siginoptions">Sign up</button>
          </span>
        </p>
        <p className="signinComplaince">HIPAA Compliant SSL Secured</p>
      </div>
    </div>
  );
}
