import React from "react";
import NavLogo from "../header/NavLogo";
import GitLink from "../header/GitLink";
import MobileNavLinks from "./MobileNavLinks";
import BurgerMenu from "./BurgerMenu";
const MobileNav = ({ isOpen, setIsOpen }) => {
  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
    const section = document.querySelector("*:not(header)");
    section.classList.toggle("overflow");
  };

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-top_bar">
        <BurgerMenu isOpen={isOpen} toggleMobileNav={toggleMobileNav} />
        <div className="mobile-nav-logo">
          <NavLogo toggle={toggleMobileNav} isOpen={isOpen} />
        </div>
      </div>
      <div className={`mobile-nav-links ${isOpen ? "active" : ""}`}>
        <MobileNavLinks toggleMobileNav={toggleMobileNav} />
        <GitLink />
      </div>
    </div>
  );
};

export default MobileNav;
