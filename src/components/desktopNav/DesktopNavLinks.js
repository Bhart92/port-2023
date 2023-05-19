import React from "react";
import DesktopNavLink from "./DesktopNavLink";

const DesktopNavLinks = () => {
  return (
    <div className="desktop-nav-links">
      <DesktopNavLink icon={"code-outline"} path={"Portfolio"} />
      <DesktopNavLink icon={"person-outline"} path={"About"} />
      <DesktopNavLink icon={"mail-outline"} path={"Contact"} />
    </div>
  );
};

export default DesktopNavLinks;
