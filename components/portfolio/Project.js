import Image from "next/image";

const Project = ({ item, i, setImgsLoaded, count }) => {
  return (
    <>
      <div className="w-[360px] h-[460px] projects-wrapper m-auto flex justify-center items-center flex-col text-black md:w-11/12 md:[&:nth-child(even)&_article]:flex-row-reverse md:[&:nth-child(even)&_figure]:mr-0 md:[&:nth-child(even)&_figure]:ml-5 ">
        {i === 0 && (
          <h1 className="text-2xl font-bold w-full h-full text-center ">Portfolio</h1>
        )}{" "}
        <a href={item.url} target="_blank" className="w-full h-full">
          <article className="w-full h-full flex mb-24 flex-col items-center m-auto md:flex-row md:w-fit lg:mb-40">
            <div className="min-w-[360px] h-[250px] flex items-center justify-center md:mr-0 md:basis-1/2">
              <Image
                priority={!item.lazy}
                quality={15}
                className="m-auto w-auto h-auto"
                src={item.projectImg}
                width={250}
                height={250}
                alt={item.imageAlt}
                placeholder="blur"
                blurDataURL={item.projectImg}
                onLoad={async () => {
                  const { incrementCounter } = await import(
                    "../../utils/useCheckImageLoad.js"
                  );
                  incrementCounter(count, setImgsLoaded, "img", 2);
                }}
              />
            </div>

            <div className="w-full text-center max-w-[90%] min-w-[210px] h-[216px] flex flex-col mt-2 md:basis-1/2 md:mt-0">
              <h2 className="text-xl">{item.title}</h2>
              <p className="text-base max-w-[650px]">{item.description}</p>
              <aside className="text-sm mt-2">Tap to learn more</aside>
            </div>
          </article>
        </a>
      </div>
    </>
  );
};

export default Project;
