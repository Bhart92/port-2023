import Link from "next/link";

const LandingHero = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-black">
        Hi! <span className="text-amber-800">I'm Brandon</span>
      </h1>
      <h2 className="text-xs text-center text-black lg:text-base">
        Web Developer |{" "}
        <span className="text-blue-900 font-light">Software Engineer</span> |
        WebAR Developer
      </h2>
      <div className="flex min-w-[275px] justify-between mt-3">
        <button
          className="min-w-[125px] px-5 py-2 transition duration-500 border-neutral-800 border-solid border-2 lg:border-4 p-0 hover:border-amber-700 hover:cursor-pointer"
          aria-label="portfolio page link"
        >
          <Link href="/portfolio" className="text-neutral-800">
            Portfolio
          </Link>
        </button>
        <button
          className="min-w-[125px] px-5 py-2 transition duration-500 border-neutral-800 border-solid border-2 lg:border-4 p-0 hover:border-amber-700 hover:cursor-pointer"
          aria-label="about page link"
        >
          <Link href="/about" className="text-neutral-800">
            About
          </Link>
        </button>
      </div>
    </>
  );
};

export default LandingHero;
