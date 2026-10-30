import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        height: "50px",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/mock">Mock</Link>
      {/* NavLink автоматически добавляет класс "active", если URL совпадает */}
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "red-link" : "blu-link")}
      >
        About
      </NavLink>
      <Link to="/auth">Auth</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/user/1">User</Link>
    </div>
  );
};

export default Header;
