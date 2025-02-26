import React from "react";
import "./introduce.css";
import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";
const Introduce = () => {
const{content}=useContext(ContextLanguage)
  return (
    <div className="introduce">
      <div className="introduce-section">
        <div className="introduce-name">
          <span className="introduce-line"></span>
          <span className="introduce-text">{content.name}</span>
        </div>
        <h1 className="introduce-title">
          {content.title}
        </h1>
        <p className="introduce-description">
          {content.description}
        </p>

        <div className="introduce-links">
          <a className="introduce-btn introduce-btn-primary" href="#">Hire me</a>
          <a className="introduce-btn" href="https://github.com/SametRozgar" target="blank">{content.github}</a>
          <a className="introduce-btn" href="https://www.linkedin.com/in/abd%C3%BClsamet-r%C3%B6zgar-31880122a/">{content.linkedin}</a>
        </div>
      </div>
      <div className="introduce-image">
        <img
          src="https://media.istockphoto.com/id/525982128/photo/the-cat-aggression.jpg?s=612x612&w=0&k=20&c=nvehkiqTZ4JJIqHLYJ2x5RxrySX_gYc-WKB9K8kbcY0="
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Introduce;
