import React from "react";
import "./introduce.css";

const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce-section">
        <div className="introduce-name">
          <span className="introduce-line"></span>
          <span className="introduce-text">Almila Su</span>
        </div>
        <h1 className="introduce-title">
          Creative thinker <br />
          Minimalism lover
        </h1>
        <p className="introduce-description">
          Hi, I'm Almila. I'm a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let’s shake hands with me.
        </p>

        <div className="introduce-links">
          <a className="introduce-btn introduce-btn-primary" href="#">Hire me</a>
          <a className="introduce-btn" href="#">Github</a>
          <a className="introduce-btn" href="#">Linkedin</a>
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
