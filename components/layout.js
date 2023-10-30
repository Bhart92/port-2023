import { Inter } from "next/font/google";
import Header from "./header/Header.js";
import dynamic from "next/dynamic";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export const siteTitle = "https://brandonhart.dev/";

function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>
          Brandon Hart | Web Developer | Software Engineer | WebAR Developer
        </title>

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
      <main
        className={`${inter.className} grid grid-rows-12 md:h-auto lg:h-screen lg:grid-cols-4`}
      >
        <Header />
        <div className="flex flex-col row-span-3 lg:col-span-3 lg:overflow-x-hidden lg:overflow-y-scroll">
          {children}
        </div>
      </main>
    </>
  );
}

export default dynamic(() => Promise.resolve(RootLayout), { ssr: false });
