import { Inter } from "next/font/google";
import LandingHero from "../components/landing/LandingHero";
import { createRef } from "@/utils/useCheckImageLoad.js";
import Loading from "@/components/Loading";
import styles from "./landing.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { count, imgsLoaded, setImgsLoaded } = createRef();

  return (
    <section
      className={`${styles.landing} relative flex flex-col items-center justify-center md:h-screen md:mt-0 md:justify-center lg:mt-0 lg:justify-center`}
    >
      <LandingHero />
    </section>
  );
}
