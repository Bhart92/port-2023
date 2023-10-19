import { Inter } from "next/font/google";
import LandingImages from "../components/landingImages/LandingImages";
import LandingHero from "../components/landing/LandingHero";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="flex flex-col items-center mt-12 md:h-screen md:mt-0 md:justify-center lg:mt-0 lg:justify-center">
      <LandingHero />
      <div className="mt-8 flex flex-col">
        <LandingImages />
      </div>
    </section>
  );
}
