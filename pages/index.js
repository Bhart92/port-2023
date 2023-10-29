import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
// import LandingImages from "../components/landingImages/LandingImages";
import { createRef } from "@/utils/useCheckImageLoad.js";
import Loading from "@/components/Loading";
const LandingHero = dynamic(() => import("../components/landing/LandingHero"));

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { count, imgsLoaded, setImgsLoaded } = createRef();

  return (
    <section className="landing relative flex flex-col items-center justify-center md:h-screen md:mt-0 md:justify-center lg:mt-0 lg:justify-center">
      <LandingHero />
    </section>
  );
}
