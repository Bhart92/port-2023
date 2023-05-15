import React, { useEffect } from "react";
import NavLogo from "../header/NavLogo";
import DesktopNavLinks from "./DesktopNavLinks";
import GitLink from "../header/GitLink";
import { revealDesktopHeader } from "../../js/animations";
const DesktopNav = () => {
  useEffect(() => {
    revealDesktopHeader();
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
