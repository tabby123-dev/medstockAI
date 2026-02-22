import React from "react";
import { useAuth } from "../../context/AuthContext";

const Admin = () => {
  const { logout } = useAuth();
  return (
    <>
      <div>Admin</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Admin;
