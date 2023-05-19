import React from "react";
import MobileNavLink from "./MobileNavLink";
const MobileNavLinks = ({ toggleMobileNav }) => {
  return (
    <>
      <MobileNavLink
        path={"Portfolio"}
        icon={"code-outline"}
        onClickFn={toggleMobileNav}
      />
      <MobileNavLink
        path={"About"}
        icon={"person-outline"}
        onClickFn={toggleMobileNav}
      />
      <MobileNavLink
        path={"Contact"}
        icon={"mail-outline"}
        onClickFn={toggleMobileNav}
      />
    </>
  );
};

export default MobileNavLinks;
