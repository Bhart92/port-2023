import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavLinks = ({ toggleMobileNav }) => {
  return (
    <>
      <NavLink
        onClick={toggleMobileNav}
        activeclassname="is-active"
        to="/portfolio"
      >
        <ion-icon name="code-outline" /> Portfolio
      </NavLink>
      <NavLink
        onClick={toggleMobileNav}
        activeclassname="is-active"
        to="/about"
      >
        <ion-icon name="person-outline"></ion-icon> About
      </NavLink>
      <NavLink
        onClick={toggleMobileNav}
        activeclassname="is-active"
        to="/contact"
      >
        <ion-icon name="mail-outline"></ion-icon> Contact
      </NavLink>

      <a href="./images/resume2020.pdf" download>
        <ion-icon name="document-attach-outline"></ion-icon> Resume
      </a>
    </>
  );
};

export default MobileNavLinks;
