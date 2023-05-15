import React from "react";
import HamburgerMenu from "react-hamburger-menu";

const BurgerMenu = ({ isOpen, toggleMobileNav }) => {
  return (
    <div className="mobile-nav-burger-menu">
      <HamburgerMenu
        className="mobile-nav-burger"
        isOpen={isOpen}
        menuClicked={toggleMobileNav}
        width={18}
        height={15}
        strokeWidth={1}
        rotate={0}
        color="white"
        borderRadius={0}
        animationDuration={0.5}
      />
    </div>
  );
};

export default BurgerMenu;
