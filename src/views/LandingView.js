import React, { useEffect } from "react";
import { revealLanding } from "../js/animations";
import LandingButtons from "../components/landing/LandingButtons";

const LandingView = () => {
  useEffect(() => {
    revealLanding();
  });
  return (
    <div className="landing section-body">
      <div className="landing-hero">
        <div className="landing-title">
          <h1>
            Hi! <span>I'm Brandon</span>
          </h1>
          <h2>&lt; Web Developer /&gt;</h2>
        </div>
        <LandingButtons />
      </div>
    </div>
  );
};

export default LandingView;
