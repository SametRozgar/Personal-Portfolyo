import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-name">A</div>
      <div className="navbar-links">
        <a href="#" className="navbar-link-item">Skills</a>
        <a href="#" className="navbar-link-item">Projects</a>
        <a href="#" className="navbar-link-item">Hire me</a>
        
      </div>
    </div>
  );
};

export default Navbar;