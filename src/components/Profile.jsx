import React from 'react';
import "./profile.css";

const Profile = () => {
  return (
    <div className='profile'>
      <h2 className="profile-title">Profile</h2>
      <div className="profile-container">
        <div className="profile-info">
          <h4>Profile</h4>
          <ul>
            <li><strong>Doğum tarihi:</strong> 24.03.1996</li>
            <li><strong>İkamet Şehri:</strong> Ankara</li>
            <li><strong>Eğitim Durumu:</strong> Hacettepe Ünv. Biyoloji</li>
            <li><strong>Lisans,</strong> 2016</li>
            <li><strong>Tercih Ettiği Rol:</strong> Frontend, UI</li>
          </ul>
        </div>

        <div className="profile-about">
          <h4>About Me</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, 
            odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p>
            Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt 
            quam temporibus cumque magnam!
          </p>
        </div>
      </div>
      <div className="profile-bottom-line"></div>
    </div>
  );
};

export default Profile;
