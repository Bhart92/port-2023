import Link from "next/link";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";
import { HiOutlineDocumentText, HiCog } from "react-icons/hi";
import { GrServices } from "react-icons/gr";
const MobileNavLinks = ({ isOpen, setOpen }) => {
  const navLinks = (
    <nav className="text-white flex justify-center flex-col w-11/12 h-3/4 m-auto">
      <div className="nav-links-top flex justify-between items-center flex-col w-95 h-full text-sm">
        <Link
          onClick={() => setOpen(false)}
          className="hover:text-amber-600 transition duration-900 flex my-5"
          href="/portfolio"
        >
          <HiOutlineDocumentText />
          &nbsp; Portfolio
        </Link>
        <Link
          onClick={() => setOpen(false)}
          className="hover:text-amber-600 transition duration-900 flex my-5"
          href="/about"
        >
          <BsPersonBoundingBox />
          &nbsp; About
        </Link>
        <Link
          onClick={() => setOpen(false)}
          className="hover:text-amber-600 transition duration-900 flex my-5"
          href="/services"
        >
          <HiCog />
          &nbsp; What We Do
        </Link>
        <div className="flex items-center justify-center my-5">
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
  return (
    <div
      className={`z-10 bg-neutral-900 text-white absolute top-20 left-0 right-0 transition duration-500 ease-in-out ${
        isOpen ? "" : "-translate-y-96"
      }`}
    >
      {isOpen && navLinks}
    </div>
  );
};

export default MobileNavLinks;
