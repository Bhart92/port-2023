import Logo from "../header/Logo.js";
import DesktopNav from "./DesktopNav.js";
import Link from "next/link";

const DesktopHeader = () => {
  return (
    <div className="bg-neutral-900 text-white h-full min-h-screen max-h-screen">
      <Link href="/">
        <div className="h-2/5 flex items-center justify-center w-full">
          <Logo />
        </div>
      </Link>
      <div className="w-full h-3/5 flex  items-center">
        <DesktopNav />
      </div>
    </div>
  );
};

export default DesktopHeader;
