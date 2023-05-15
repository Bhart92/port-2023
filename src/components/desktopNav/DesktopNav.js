import React, { useEffect } from "react";
import { gsap } from "gsap";
import NavLogo from "../header/NavLogo";
import DesktopNavLinks from "./DesktopNavLinks";
import GitLink from "../header/GitLink";
const DesktopNav = () => {
  useEffect(() => {
    let loadAnimationTl = gsap.timeline({ delay: 1 });

    loadAnimationTl.to("header", { transform: "translate(0, 0)" }, "<.25");
    loadAnimationTl.to(".nav-link", {
      opacity: 1,
      y: -10,
      stagger: {
        // wrap advanced options in an object
        amount: 1,
        each: 0.05,
        from: "top",
        grid: "auto",
        ease: "none",
        repeat: 0, // Repeats immediately, not waiting for the other staggered animations to finish
      },
    });
    const links = Array.from(document.querySelectorAll(".nav-link"));
    console.log(links);
  });
  return (
    <div className="desktop-nav">
      <NavLogo />
      <DesktopNavLinks />
      <GitLink />
    </div>
  );
};

export default DesktopNav;
