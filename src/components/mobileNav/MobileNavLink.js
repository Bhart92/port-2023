import React from "react";
import { NavLink } from "react-router-dom";

const toggleMobileNav = ({ icon, path, onClickFn }) => {
  return (
    <NavLink
      onClick={onClickFn}
      activeclassname="is-active"
      to={`/${path.toLowerCase()}`}
    >
      <ion-icon name={icon} /> {path}
    </NavLink>
  );
};

export default toggleMobileNav;
