import { Inter } from "next/font/google";
import LandingImages from "../components/landingImages/LandingImages";
import LandingHero from "../components/landing/LandingHero";
import { createRef } from "@/utils/useCheckImageLoad.js";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { count, imgsLoaded, setImgsLoaded } = createRef();

  return (
    <>
      <Head>
        <title>
          Brandon Hart | Web Developer | Software Engineer | WebAR Developer
        </title>
        <link rel="preload" href="/images/sb.webp" as="image" />
        <link rel="preload" href="/images/culver.webp" as="image" />

        <meta name="robots" content="all" />
        <meta
          name="description"
          key="desc"
          content="Professional Web Developer with experience crafting highly performant web applications for high profile clients."
        />
        <meta
          property="og:image"
          content="Professional Web Developer with experience crafting highly performant web applications for high profile clients."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://example.com/blog/original-post"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative flex flex-col items-center mt-12 md:h-screen md:mt-0 md:justify-center lg:mt-0 lg:justify-center">
        {/* {!imgsLoaded && <Loading />} */}
        {/* <div
        className={` flex flex-col items-center ${imgsLoaded ? "" : "hidden"}`}
      > */}
        <LandingHero />
        <div className="mt-8 flex flex-col w-full">
          <LandingImages
            count={count}
            imgsLoaded={imgsLoaded}
            setImgsLoaded={setImgsLoaded}
          />
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
