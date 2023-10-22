import { incrementCounter } from "@/utils/useCheckImageLoad";
import Image from "next/image";

const Project = ({ item, i, setImgsLoaded, count }) => {
  return (
    <>
      <div className=" w-11/12 projects-wrapper m-auto flex justify-center items-center flex-col md:[&:nth-child(even)&_article]:flex-row-reverse md:[&:nth-child(even)&_figure]:mr-0 md:[&:nth-child(even)&_figure]:ml-5 ">
        {i === 0 && <h1 className="mb-10 text-center md:mb-12">Portfolio</h1>}{" "}
        <a href={item.url} target="_blank">
          <article className="w-full flex mb-24 flex-col items-center m-auto md:flex-row md:items-start md:w-fit lg:mb-40">
            <Image
              priority={true}
              className="m-auto w-full flex items-center justify-center md:mr-5 md:basis-1/2"
              src={item.projectImg}
              width={450}
              height={450}
              alt={item.imageAlt}
              placeholder="empty"
              onLoad={() => incrementCounter(count, setImgsLoaded, "img")}
            />

            <div className="w-full flex flex-col mt-2 md:basis-1/2 md:mt-0">
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
