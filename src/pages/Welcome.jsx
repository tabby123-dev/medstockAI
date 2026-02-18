import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Welcome</div>
      <button onClick={() => navigate("/signin")}>signin</button>
    </>
  );
};

export default Welcome;
