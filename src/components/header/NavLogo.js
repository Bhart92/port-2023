import React from "react";
import { NavLink } from "react-router-dom";
const NavLogo = ({ toggle, isOpen }) => {
  const toggleLogo = () => {
    if (isOpen) toggle();
    return;
  };
  return (
    <div className="desktop-nav-logo nav-link" onClick={toggleLogo}>
      <NavLink to="/">
        <h1>
          B<span>K</span>H
        </h1>
      </NavLink>

      <h2 className="desktop-nav-sub">
        Brandon K. Hart
        <br />
        <span>Web Developer</span>
      </h2>
    </div>
  );
};

export default NavLogo;
