import React, { useEffect } from "react";
import NavLogo from "../header/NavLogo";
import DesktopNavLinks from "./DesktopNavLinks";
import GitLink from "../header/GitLink";
import { revealHeader } from "../../js/animations";
const DesktopNav = () => {
  useEffect(() => {
    revealHeader();
  });
  return (
    <div className="desktop-nav">
      <NavLogo />
      <DesktopNavLinks />
    </div>
  );
};

export default DesktopNav;
