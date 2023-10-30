import Image from "next/image";
import { incrementCounter } from "../../utils/useCheckImageLoad.js";
const Project = ({ item, i, setImgsLoaded, count }) => {
  return (
    <>
      <div className="w-[360px] h-[460px] projects-wrapper m-auto flex justify-center items-center flex-col text-black md:w-11/12 md:[&:nth-child(even)&_article]:flex-row-reverse md:[&:nth-child(even)&_figure]:mr-0 md:[&:nth-child(even)&_figure]:ml-5 ">
        {i === 0 && (
          <h1 className="w-full h-full mb-10 text-center md:mb-12">
            Portfolio
          </h1>
        )}{" "}
        <a href={item.url} target="_blank" className="w-full h-full">
          <article className="w-full h-full flex mb-24 flex-col items-center m-auto md:flex-row md:items-start md:w-fit lg:mb-40">
            <div className="min-w-[360px] h-[250px] flex items-center justify-center md:mr-5 md:basis-1/2">
              <Image
                priority={true}
                quality={35}
                className="m-auto w-auto h-auto"
                src={item.projectImg}
                width={250}
                height={250}
                alt={item.imageAlt}
                placeholder="blur"
                blurDataURL={item.projectImg}
                onLoad={() => {
                  incrementCounter(count, setImgsLoaded, "img");
                  console.log(count);
                }}
              />
            </div>

            <div className="w-full min-w-[360px] h-[216px] flex flex-col mt-2 md:basis-1/2 md:mt-0">
              <h2 className="text-xl">{item.title}</h2>
              <p className="text-base">{item.description}</p>
              <aside className="text-sm mt-2">Tap to learn more</aside>
            </div>
          </article>
        </a>
      </div>
    </>
  );
};

export default Project;
