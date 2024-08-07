import Timeline from "@/components/timeline/Timeline";
import Head from "next/head";
import { createRef } from "@/utils/useCheckImageLoad.js";
import Loading from "../../components/Loading";
export const siteTitle = "https://brandonhart.dev/about";

const index = () => {
  const { count, imgsLoaded, setImgsLoaded } = createRef();
  return (
    <>
      <Head>
        <title>
          Brandon Hart | About | Web Developer | Software Engineer | WebAR
          Developer
        </title>

        <meta name="robots" content="all" />
        <meta
          name="description"
          key="desc"
          content="Brandon Hart Web Developer | Software Engineer | WebAR Developer about timeline and professional work history as a developer and engineer."
        />
        <meta
          property="og:image"
          content="Brandon Hart Web Developer | Software Engineer | WebAR Developer about timeline and professional work history as a developer and engineer."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://brandonhart.dev/about"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-black h-auto text-2xl m-auto pt-12 w-full flex flex-col items-center about-wrapper relative">
        <div className='m-auto w-full w-full flex flex-col items-center'>
          <h1 className="text-2xl font-bold w-full h-full text-center">About</h1>
          <article className="max-w-[1050px] mx-auto 2xl:max-w-[1500px]">
            <p className="text-base w-9/12 my-6 m-auto leading-7 text-center">
                In my time as a developer I have launched large budget projects
                for clients including Verizon, NBC, and PepsiCo. I've built
                modules enabling sales teams to expand across the US and helped
                build and maintain the web presence of several IPs. My expertise
                has allowed me to bring projects in under-budget while exceeding
                expectations. I love my work and look forward to new challenges
                everyday.
            </p>
          </article>
          <article className="w-10/12">
            <Timeline
              count={count}
              setImgsLoaded={setImgsLoaded}
              imgsLoaded={imgsLoaded}
            />
          </article>
        </div>
      </section>
    </>
  );
};

export default index;
