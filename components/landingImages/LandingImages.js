import Link from "next/link";
import Image from "next/image";
import { incrementCounter } from "@/utils/useCheckImageLoad";

const LandingImages = ({ count, setImgsLoaded }) => {
  // Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
  return (
    <aside className="w-11/12 m-auto flex flex-col">
      <Link href="/portfolio">
        <figure className="flex justify-end w-full">
          <Image
            priority={true}
            src="/images/hint.webp"
            width={215}
            height={120}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            placeholder="blur"
            blurDataURL={rgbDataURL(255, 255, 255)}
            alt="Link to portfolio"
            onLoad={() => incrementCounter(count, setImgsLoaded, "img")}
          />
        </figure>
        <div className=" relative w-full h-auto flex flex-col md:flex-row md:flex-wrap md:justify-center">
          <figure className="relative aspect-square w-full h-auto grow mt-2  md:basis-1/3 md:mt-0 md:min-h-[200px] md:aspect-auto">
            <Image
              src="/images/sb.webp"
              priority={true}
              fill={true}
              placeholder="empty"
              objectFit="cover"
              alt="Superbowl Halftime Experience"
              // onLoad={() => incrementCounter(count, setImgsLoaded, "img")}
            />
          </figure>
          <figure className="relative aspect-square w-full h-auto md:basis-1/3 grow md:min-h-[200px] md:aspect-auto">
            <Image
              src="/images/brea.webp"
              priority={true}
              fill={true}
              placeholder="empty"
              objectFit="cover"
              alt="The La Brea Sinkhole Experience"
              // onLoad={() => incrementCounter(count, setImgsLoaded, "img")}
            />
          </figure>
          <figure className="relative aspect-square w-full h-auto md:basis-1/3 grow mb-16 md:min-h-[200px] md:aspect-auto md:mb-0">
            <Image
              src="/images/culver.webp"
              priority={true}
              fill={true}
              placeholder="empty"
              objectFit="cover"
              alt="Culver City Signage"
              // onLoad={() => incrementCounter(count, setImgsLoaded, "img")}
            />
          </figure>
        </div>
      </Link>
    </aside>
  );
};

export default LandingImages;
