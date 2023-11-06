const Logo = ({isOpen = false, setOpen = null, isMobile=false}) => {
  const toggleMobileNav = () => {
    if(isMobile && setOpen) setOpen(false);
    return;
  };
  return (
    <div className="header-logo" onClick={() => toggleMobileNav()}>
      <span className=" text-3xl p-2 transition duration-500 text-white-700 lg:text-5xl border-white-800 border-solid border-2 lg:border-4 p-0 hover:border-amber-700 hover:cursor-pointer">
        BKH
      </span>
    </div>
  );
};

export default Logo;
