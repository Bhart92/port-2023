import { Inter } from "next/font/google";
// import LandingImages from "../components/landingImages/LandingImages";
import LandingHero from "../components/landing/LandingHero";
import { createRef } from "@/utils/useCheckImageLoad.js";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { count, imgsLoaded, setImgsLoaded } = createRef();

  return (
    <section className="relative flex flex-col items-center mt-12 md:h-screen md:mt-0 md:justify-center lg:mt-0 lg:justify-center">

      <LandingHero />
 
    </section>
  );
}
