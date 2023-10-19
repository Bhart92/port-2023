import Link from "next/link";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";

const DesktopNav = () => {
  return (
    <nav className="text-white flex justify-center flex-col w-11/12 h-3/4 m-auto">
      <div className="nav-links-top flex justify-between flex-col w-95 h-full text-sm">
        <Link
          className="hover:text-amber-600 transition duration-900 flex"
          href="/portfolio"
        >
          <HiOutlineDocumentText />
          &nbsp; Portfolio
        </Link>
        <Link
          className="hover:text-amber-600 transition duration-900 flex"
          href="/about"
        >
          <BsPersonBoundingBox />
          &nbsp; About
        </Link>
        <a
          target="_blank"
          className="hover:text-amber-600 transition duration-900 flex"
          href="https://github.com/Bhart92"
        >
          <AiOutlineGithub />
          &nbsp; Github
        </a>
        <a
          target="_blank"
          className="self-center transition duration-900 hover:text-amber-600 flex"
          href="https://www.linkedin.com/in/hartwebdev/"
        >
          <AiOutlineLinkedin />
          &nbsp; LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default DesktopNav;
