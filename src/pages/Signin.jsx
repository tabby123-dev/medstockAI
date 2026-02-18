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
    <div>
      <h1>Sign In</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
