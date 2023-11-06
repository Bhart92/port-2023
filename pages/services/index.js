import Head from "next/head";
import Image from "next/image";
import ServiceCards from "../../components/services/ServiceCards.js";
import Features from "../../components/services/Features.js";
export const siteTitle = "https://brandonhart.dev/services";
import useIsDesktopSize from "../../utils/useIsDesktopSize.js";
import serviceStyles from "./services.module.scss";
const index = (props) => {
  const { isDesktopSize, isTabletSize } = useIsDesktopSize();
  const generateImage = () => {
    if (isTabletSize || isDesktopSize) {
      return (
        <figure className="w-[90%] h-auto m-auto my-6">
          <Image
            quality={100}
            className="m-auto w-full h-full"
            src="/images/insight-desk.webp"
            width={500}
            height={100}
            alt="Page Speed Insight optimization results showing 100% across the board"
            placeholder="blur"
            blurDataURL="/images/insight-desk.webp"
          />
        </figure>
      );
    } else {
      return (
        <figure className="w-[50%] h-auto m-auto">
          <Image
            quality={100}
            className="m-auto w-full h-full"
            src="/images/insight.webp"
            width={350}
            height={85}
            alt="Page Speed Insight optimization results showing 100% across the board"
            placeholder="blur"
            blurDataURL="/images/insight.webp"
          />
        </figure>
      );
    }
  };
  return (
    <>
      <Head>
        <title>
          Brandon Hart | Services | Web Developer | Software Engineer | WebAR
          Developer
        </title>

        <meta name="robots" content="all" />
        <meta
          name="description"
          key="desc"
          content="Brandon Hart Web Developer | Software Engineer | WebAR Developer services we offer."
        />
        <meta
          property="og:image"
          content="Brandon Hart Web Developer | Software Engineer | WebAR Developer services we offer."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://brandonhart.dev/services"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="pt-10 text-black h-auto text-2xl m-auto w-full flex flex-col items-center relative ">
        <div className="m-auto w-full w-full flex flex-col items-center">
          <div className={` ${serviceStyles.topServiceWrapper} mx-auto my-0 `}>
            <h1 className="text-center font-bold text-2xl">Services</h1>
            <article className="max-w-[1050px] mx-auto 2xl:max-w-[1500px]">
              <p className="text-base w-9/12 my-6 m-auto leading-7 text-center md:mb-10">
                We offer full stack and front end web development. Each package
                includes hosting, a free logo, and full ownership of your
                website. We don't hold you hostage with monthly fees. we do
                however offer a monthly subscription giving you 24/7 direct
                access to a professional developer whenever you want to make
                changes.
              </p>
            </article>
            <div className="flex flex-col items-center mx-auto w-[75%] md:items-start ">
              <ServiceCards />
            </div>
          </div>

          <div className="pt-10 pb-10 mx-auto my-0">
            <h1 className="text-center font-bold text-2xl">Why Use Us?</h1>

            <div>
              <article className="max-w-[1050px] mx-auto">
                <p className="text-base w-9/12 my-6 m-auto leading-7 text-center">
                  We utilize modern web frameworks and best practices to
                  optimize everything, everywhere. Using tools created by Google
                  we diligently scan every website to ensure it is optmized for
                  search engines and users. We will setup your Google Business
                  account and help you get to the top of search engine results.
                </p>
              </article>
              {generateImage()}
              <div className="flex flex-col items-center mx-auto w-[75%] md:items-start ">
                <Features />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
