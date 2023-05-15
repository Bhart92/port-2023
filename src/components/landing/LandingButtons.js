import React from "react";
import LandingButton from "./LandingButton";

const LandingButtons = () => {
  return (
    <div className="landing-hero-btns">
      <LandingButton path={"Portfolio"} />
      <LandingButton path={"About"} />
    </div>
  );
};

export default LandingButtons;
