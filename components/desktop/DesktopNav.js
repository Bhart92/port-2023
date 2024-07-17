import Link from "next/link";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";
import { HiOutlineDocumentText, HiCog } from "react-icons/hi";
import { GrServices } from "react-icons/gr";

const DesktopNav = () => {
  return (
    <nav className="text-white flex justify-center flex-col w-11/12 h-3/4 m-auto">
      <div className="nav-links-top flex justify-between flex-col w-95 h-full text-sm">
        <Link
          className="hover:text-amber-600 transition duration-900 flex"
          href="/about"
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

        <div className="flex items-center justify-center">
          <a
            target="_blank"
            className="self-center transition duration-900 hover:text-amber-600 flex items-center justify-center"
            href="https://www.linkedin.com/in/hartwebdev/"
          >
            <AiOutlineLinkedin />
            &nbsp; LinkedIn
          </a>{" "}
          &nbsp;|&nbsp;
          <a
            target="_blank"
            className="self-center transition duration-900 hover:text-amber-600 flex items-center justify-center"
            href="https://github.com/Bhart92"
          >
            <AiOutlineGithub />
            &nbsp; Github
          </a>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
