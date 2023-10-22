import Link from "next/link";
import Image from "next/image";
import { incrementCounter } from "@/utils/useCheckImageLoad";

const LandingImages = ({ count, setImgsLoaded }) => {
  return (
    <aside className="w-11/12 m-auto flex flex-col">
      <Link href="/portfolio">
        <figure className="flex justify-end w-full">
          <Image
            priority={true}
            src="/images/hint.webp"
            width={215}
            height={120}
            alt="Link to portfolio"
            placeholder="empty"
            onLoad={() => incrementCounter(count, setImgsLoaded, "img")}
          />
        </figure>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
          <figure className=" md:basis-1/3 grow mt-2 md:mt-0">
            <Image
              src="/images/sb.webp"
              // priority={lazy}
              width={450}
              height={450}
              alt="Superbowl Halftime Experience"
              onLoad={() => incrementCounter(count, setImgsLoaded, "img")}
            />
          </figure>
          <figure className=" md:basis-1/3 grow">
            <Image
              src="/images/brea.jpg"
              // priority={lazy}
              width={450}
              height={450}
              alt="The La Brea Sinkhole Experience"
              onLoad={() => incrementCounter(count, setImgsLoaded, "img")}
            />
          </figure>
          <figure className=" md:basis-1/3 grow mb-16">
            <Image
              src="/images/culver.jpg"
              priority={true}
              width={450}
              height={450}
              alt="Culver City Signage"
              onLoad={() => incrementCounter(count, setImgsLoaded, "img")}
            />
          </figure>
        </div>
      </Link>
    </aside>
  );
};

export default LandingImages;
