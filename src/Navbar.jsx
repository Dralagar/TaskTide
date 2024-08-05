import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>TaskTide</h1>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="breadcrumb">
        <NavLink to="/">Home</NavLink>
        {pathnames.map((value, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <React.Fragment key={path}>
              <span> / </span>
              <NavLink to={path}>{value}</NavLink>
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
