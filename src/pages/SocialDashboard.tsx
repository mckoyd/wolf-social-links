import React from "react";
import JessicaAvatar from "../assets/images/avatar-jessica.jpeg";

import "../styles/SocialDashboard.css";
import { socialPlatforms } from "../config/SocialDashboard.config";
import SocialButton from "../components/SocialButton";

const SocialDashboard: React.FC = () => {
  console.log(JessicaAvatar);
  return (
    <section className="social-dashboard-section">
      <img
        src={JessicaAvatar}
        alt="profile picture of Jessica"
        className="social-avatar"
      />
      <h2 className="social-title">Jessica Randall</h2>
      <h3 className="social-description">London, United Kingdom</h3>
      <p className="social-bio">"Front-end developer and avid reader."</p>
      <section className="social-btns">
        {socialPlatforms.map((socialPlatform: string, index: number) => (
          <SocialButton
            key={`${socialPlatform}-${index}`}
            buttonText={socialPlatform}
          />
        ))}
      </section>
    </section>
  );
};

export default SocialDashboard;
