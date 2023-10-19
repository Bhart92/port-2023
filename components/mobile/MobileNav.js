import Hamburger from "hamburger-react";

const MobileNav = ({ isOpen, setOpen }) => {
  return (
    <div className="z-30 text-white flex justify-center flex-col w-11/12 h-3/4 m-auto ">
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
};

export default MobileNav;
