import { appData } from "../../data/appData.js";
import Head from "next/head";
import dynamic from "next/dynamic";
export const siteTitle = "https://brandonhart.dev/portfolio";

const index = () => {
  const generateProjects = () => {
    const Project = dynamic(
      () => import("../../components/portfolio/Project.js"),
      {
        ssr: true,
      }
    );
    return (
      <div className="images">
        {appData.projects.map((item, i) => (
          <Project item={item} i={i} key={i} />
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
      <section className="portfolio-wrapper text-2xl">
        <div className="portfolio mt-12 mb-16">{generateProjects()}</div>
      </section>
    </>
  );
};

export default index;