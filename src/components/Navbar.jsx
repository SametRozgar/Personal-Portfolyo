import React, { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon, FiGlobe } from "react-icons/fi";
import "./navbar.css";
import useDarkMode from "../hooks/useDarkMode";
import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const { dilDegistir, content } = useContext(ContextLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = () => {
    dilDegistir();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-name">A</div>

        {/* Hamburger Menü Butonu */}
        <button className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navbar Linkleri */}
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#" className="navbar-link-item">{content.skills}</a>
          <a href="#" className="navbar-link-item">{content.projects}</a>
          <a href="#" className="navbar-link-item">{content.hire_me}</a>

          {/* Tema Değiştirme Butonu */}
          <div className="switch-container" onClick={toggleTheme}>
            <button className="switch-button">
              {isDarkMode ? <FiSun /> : <FiMoon />} 
              {isDarkMode ? content.light : content.dark}
            </button>
          </div>

          {/* Dil Değiştirme Butonu */}
          <div className="switch-container" onClick={changeLanguage}>
            <button className="switch-button">
              <FiGlobe /> {content.change_language}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
