import Logo from "../header/Logo.js";
import MobileNav from "../mobile/MobileNav.js";
import Link from "next/link";
import { useState } from "react";
import MobileNavLinks from "./MobileNavLinks";

const MobileHeader = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className=" relative px-6 h-20 flex justify-between items-center bg-neutral-900 text-white lg:h-full lg:min-h-screen lg:max-h-screen">
      <div className="bg-neutral-900 absolute top-0 bottom-0 left-0 right-0 w-full h-full z-20" />
      <Link href="/" className="w-fit z-30">
        <div className="w-fit lg:h-2/5 flex items-center justify-center lg:w-full">
          <Logo />
        </div>
      </Link>
      <div className="lg:w-full lg:h-3/5 flex  items-center">
        <MobileNav isOpen={isOpen} setOpen={setOpen} />
        <MobileNavLinks isOpen={isOpen} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default MobileHeader;
