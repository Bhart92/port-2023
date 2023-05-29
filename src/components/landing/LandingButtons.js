import React from "react";
import LandingButton from "./LandingButton";
const LandingButtons = () => {
  return (
    <div className="landing-hero-btns">
      <div className="landing-btn-wrapper">
        <LandingButton path={"Portfolio"} />
        <LandingButton path={"About"} />
      </div>
      <div className="landing-git-link">
        <a href="https://github.com/Bhart92">
          View My Github. <ion-icon name="logo-github" />
        </a>
      </div>
    </div>
  );
};

export default LandingButtons;
