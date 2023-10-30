import { appData } from "../../data/appData.js";
import Head from "next/head";
import { createRef } from "../../utils/useCheckImageLoad.js";
export const siteTitle = "https://brandonhart.dev/portfolio";
import Project from "../../components/portfolio/Project.js";
import Loading from "../../components/Loading";
const index = () => {
  const { count, imgsLoaded, setImgsLoaded } = createRef();

  const generateProjects = () => {
    return (
      <div className="images [&>*:nth-child(1)]:mb-6">
        {appData.projects.map((item, i) => (
          <Project
            item={item}
            i={i}
            key={i}
            setImgsLoaded={setImgsLoaded}
            count={count}
          />
        ))}
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>
          Brandon Hart | Portfolio | Web Developer | Software Engineer | WebAR
          Developer
        </title>

        <meta name="robots" content="all" />
        <meta
          name="description"
          key="desc"
          content="Brandon Hart Web Developer | Software Engineer | WebAR Developer portfolio consisting of several years worht of projects for high profile clients."
        />
        <meta
          property="og:image"
          content="Brandon Hart Web Developer | Software Engineer | WebAR Developer portfolio consisting of several years worht of projects for high profile clients."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://brandonhart.dev/portfolio"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative portfolio-wrapper text-2xl">
        {!imgsLoaded && <Loading />}
        <div className={`portfolio mt-12 mb-16 ${!imgsLoaded ? "hidden" : ""}`}>
          {generateProjects()}
        </div>
      </section>
    </>
  );
};

export default index;
