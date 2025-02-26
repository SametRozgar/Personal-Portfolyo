import React, { useContext } from "react";
import "./profile.css";
import { ContextLanguage } from "../context/LanguageContexts";

const Profile = () => {
  const { content } = useContext(ContextLanguage);

  return (
    <div className="profile">
      <h2 className="profile-title">{content.profile}</h2>

      <div className="profile-container">
        <div className="profile-info">
          <h4>{content.profile}</h4>
          <ul>
            <li>
              <strong>{content.birth_date_words}:</strong> {content.birth_date}
            </li>
            <li>
              <strong>{content.city_words}:</strong> {content.city}
            </li>
            <li>
              <strong>{content.education_words}:</strong> {content.education}
            </li>
            <li>
              <strong>{content.license_words}:</strong> {content.license}
            </li>
            <li>
              <strong>{content.role_words}:</strong> {content.role}
            </li>
          </ul>
        </div>

        <div className="profile-about">
          <h4>{content.about_me}</h4>
          <p>{content.description}</p>
        </div>
      </div>

      <div className="profile-bottom-line"></div>
    </div>
  );
};

export default Profile;
