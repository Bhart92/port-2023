import React, { useState, useEffect } from "react";
import MobileNav from "../mobileNav/MobileNav";
import DesktopNav from "../desktopNav/DesktopNav";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 999);

  const getIsMobile = () => {
    if (window.innerWidth < 999) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", getIsMobile);
  }, []);

  const generateHeaderMarkup = () => {
    if (!isMobile) {
      return <DesktopNav />;
    } else {
      return (
        <>
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      );
    }
  };
  return <header className="header">{generateHeaderMarkup()}</header>;
};
export default Header;