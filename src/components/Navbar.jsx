import React, { useEffect, useState } from "react";
import "./navbar.css";
import useDarkMode from "../hooks/useDarkMode";
import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";
const Navbar = () => {
  const [isDarkMode,setIsDarkMode]=useDarkMode();

  const {dilDegistir,content}=useContext(ContextLanguage)
  
  const changeLanguage=()=>
  {
    dilDegistir()
  }
  const toggleTheme=()=>
  {
  setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="navbar">
      <div className="navbar-name">A</div>
      <div className="navbar-links" >
        <a href="#" id="links_navbar" className="navbar-link-item">{content.skills}</a>
        <a href="#" id="links_navbar" className="navbar-link-item">{content.projects}</a>
        <a href="#" id="links_navbar" className="navbar-link-item">{content.hire_me}</a>

        <button onClick={toggleTheme}>
        {isDarkMode ? `${content.change_theme} ${content.light} `:`${content.change_theme} ${content.dark} `}
        </button>

        <button onClick={changeLanguage}>
        {content.change_language}
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;