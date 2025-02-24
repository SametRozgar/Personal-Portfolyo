import React from "react";
import "./navbar.css";
import useDarkMode from "../hooks/useDarkMode";
const Navbar = () => {
  const [isDarkMode,setIsDarkMode]=useDarkMode();
  return (
    <div className="navbar">
      <div className="navbar-name">A</div>
      <div className="navbar-links">
        <a href="#" className="navbar-link-item">Skills</a>
        <a href="#" className="navbar-link-item">Projects</a>
        <a href="#" className="navbar-link-item">Hire me</a>

        <button onClick={()=>setIsDarkMode(!isDarkMode)}>
          sdfsd
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;