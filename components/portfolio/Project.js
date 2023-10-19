import Image from "next/image";
import Link from "next/link";
const Project = ({ item, i }) => {
  return (
    <div className="w-4/5 projects-wrapper m-auto flex justify-center items-center flex-col [&:nth-child(even)&_article]:flex-row-reverse [&:nth-child(even)&_figure]:mr-0 [&:nth-child(even)&_figure]:ml-5">
      {i === 0 && <h1 className="mb-10 text-center md:mb-12">Portfolio</h1>}{" "}
      <a href={item.url} target="_blank">
        <article className="w-96 flex mb-24 flex-col items-center md:flex-row md:items-start md:w-fit lg:mb-40">
          <figure className="m-auto basis-1/2 flex items-align justify-start mr-5">
            {item.isVideo ? (
              <video controls>
                <source src={item.projectImg} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={item.projectImg}
                width={450}
                height={450}
                alt={item.imageAlt}
              />
            )}
          </figure>
          <div className="w-full flex flex-col basis-1/2 mt-2 md:mt-0">
            <h2 className="text-lg">{item.title}</h2>
            <p className="text-sm ">{item.description}</p>
            <aside className="text-sm mt-2">Tap to learn more</aside>
          </div>
        </article>
      </a>
    </div>
  );
};

export default Project;
