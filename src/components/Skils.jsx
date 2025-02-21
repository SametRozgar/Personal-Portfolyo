import React from 'react';
import "./skils.css";

const Skils = () => {
  return (
    <div className='skils'>
      <h2 className="skils-title">Skills</h2>
      <div className="skils-container">
        <div className="skils-container-item">
            <h4>Java Script</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="skils-container-item">
        <h4>React.Js</h4>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="skils-container-item">
        <h4>Node.Js</h4>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="skils-bottom-line"></div>
    </div>
  )
}

export default Skils;
