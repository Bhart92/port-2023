import React from "react";
import { NavLink } from "react-router-dom";

const DesktopNavLink = ({ icon, path }) => {
  return (
    <NavLink
      className="nav-link"
      activeclassname="is-active"
      to={`/${path.toLowerCase()}`}
    >
      <ion-icon name={icon} /> {path}
    </NavLink>
  );
};

export default DesktopNavLink;
