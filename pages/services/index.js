import Head from "next/head";
export const siteTitle = "https://brandonhart.dev/services";

const index = (props) => {
	return (
		<>
			<Head>
				<title>
					Brandon Hart | Services | Web Developer | Software Engineer
					| WebAR Developer
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
			<section className="text-black h-auto text-2xl m-auto pt-12 w-full flex flex-col items-center about-wrapper relative">
				<div className="m-auto w-full w-full flex flex-col items-center">
					<h1 className="text-center">Services</h1>
				</div>
			</section>
		</>
	);
};

export default index;
