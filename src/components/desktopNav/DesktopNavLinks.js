import React from "react";
import DesktopNavLink from "./DesktopNavLink";

const DesktopNavLinks = () => {
  return (
    <div className="desktop-nav-links">
      <DesktopNavLink icon={"code-outline"} path={"Portfolio"} />
      <DesktopNavLink icon={"person-outline"} path={"About"} />
      <DesktopNavLink icon={"mail-outline"} path={"Contact"} />
      <>
        <a className="nav-link" href="https://github.com/Bhart92">
          <ion-icon name="logo-github" /> &nbsp;View My Github.
        </a>
      </>
    </div>
  );
};

export default DesktopNavLinks;
