import Link from "next/link";
import Image from "next/image";

const LandingImages = () => {
  return (
    <aside className="w-11/12 m-auto flex flex-col">
      <Link href="/portfolio">
        {" "}
        <figure className="flex justify-end w-full">
          <Image
            src="/images/hint.png"
            width={215}
            height={120}
            alt="Picture of the author"
          />
        </figure>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
          <figure className=" md:basis-1/3 grow mt-2 md:mt-0">
            {" "}
            <Image
              src="/images/sb.jpg"
              width={800}
              height={800}
              alt="Picture of the author"
            />
          </figure>
          <figure className=" md:basis-1/3 grow">
            {" "}
            <Image
              src="/images/brea.jpg"
              width={800}
              height={800}
              alt="Picture of the author"
            />
          </figure>{" "}
          <figure className=" md:basis-1/3 grow mb-16">
            {" "}
            <Image
              src="/images/brea.jpg"
              width={800}
              height={800}
              alt="Picture of the author"
            />
          </figure>
        </div>
      </Link>
    </aside>
  );
};

export default LandingImages;
