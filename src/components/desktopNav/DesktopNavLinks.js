import React from "react";
import { NavLink } from "react-router-dom";

const DesktopNavLinks = () => {
  return (
    <div className="desktop-nav-links">
      <NavLink className="nav-link" activeclassname="is-active" to="/portfolio">
        <ion-icon name="code-outline" /> Portfolio
      </NavLink>
      <NavLink className="nav-link" activeclassname="is-active" to="/about">
        <ion-icon name="person-outline"></ion-icon> About
      </NavLink>
      <NavLink className="nav-link" activeclassname="is-active" to="/contact">
        <ion-icon name="mail-outline"></ion-icon> Contact
      </NavLink>

      <a className="nav-link" href="./images/resume2020.pdf" download>
        <ion-icon name="document-attach-outline"></ion-icon> Resume
      </a>
    </div>
  );
};

export default DesktopNavLinks;
