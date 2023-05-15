import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
const LandingView = () => {
  useEffect(() => {
    let loadAnimationTl = gsap.timeline({ delay: 0.25 });
    loadAnimationTl.to(".landing-hero", {
      top: 0,
      opacity: 1,
      delay: 0.25,
      duration: 1,
    });
    loadAnimationTl.to("header", { transform: "translate(0, 0)" }, "<.25");
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
        <div className="landing-hero-btns">
          <NavLink className="btn button-fill" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className="btn button-outline" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingView;
