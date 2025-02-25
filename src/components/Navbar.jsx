import React, { useEffect, useState } from "react";
import "./navbar.css";
import useDarkMode from "../hooks/useDarkMode";
import ceviri from "../data/translations.json"
const Navbar = () => {
  const [isDarkMode,setIsDarkMode]=useDarkMode();
  const [language,setLanguage]=useState("en")
  const [content,setContent]=useState(ceviri[language])
  
  useEffect(()=>
  {
  setContent(ceviri[language])
  },[language])

  const dildegistir =()=>
  {
    setLanguage("tr")
  }
  return (
    <div className="navbar">
      <div className="navbar-name">A</div>
      <div className="navbar-links">
        <a href="#" className="navbar-link-item">{content.skils}</a>
        <a href="#" className="navbar-link-item">Projects</a>
        <a href="#" className="navbar-link-item">Hire me</a>

        <button onClick={()=>setIsDarkMode(!isDarkMode)}>
          sdfsd
        </button>

        <button onClick={dildegistir}>
          dili değistir
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;