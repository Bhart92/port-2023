import React from "react";
import DesktopNavLink from "./DesktopNavLink";

const DesktopNavLinks = () => {
  return (
    <div className="desktop-nav-links">
      <DesktopNavLink icon={"code-outline"} path={"Portfolio"} />
      <DesktopNavLink icon={"person-outline"} path={"About"} />
      <DesktopNavLink icon={"mail-outline"} path={"Contact"} />

      <a className="nav-link" href="./images/resume2020.pdf" download>
        <ion-icon name="document-attach-outline"></ion-icon> Resume
      </a>
    </div>
  );
};

export default DesktopNavLinks;
