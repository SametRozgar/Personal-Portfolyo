import React, { useContext } from "react";
import "./skils.css";
import { ContextLanguage } from "../context/LanguageContexts";

const Skils = () => {
  const { content } = useContext(ContextLanguage);

  return (
    <div className="skils">
      <h2 className="skils-title">{content.skills}</h2>
      <div className="skils-container">
        {content.skills_list.map((skill, index) => (
          <div key={index} className="skils-container-item">
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
      <div className="skils-bottom-line"></div>
    </div>
  );
};

export default Skils;
