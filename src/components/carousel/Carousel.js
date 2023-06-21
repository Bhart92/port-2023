import React, { useLayoutEffect } from "react";
import hint from "../../images/carousel-hint.png";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { isMobile } from "mobile-device-detect";
import { appData } from "../../data/appData";
import { useEffect } from "react";

// register Swiper custom elements
register();

const Carousel = () => {
  const { images } = appData;
  const { imgs } = appData;
  useEffect(() => {
    const swiperEl = document.querySelector("swiper-container");

    // swiper parameters
    const swiperParams = {
      slidesPerView: isMobile ? 1 : 3,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1050: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 3,
        },
      },
      on: {
        init() {
          // ...
        },
      },
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();
  }, []);
  const generateSlides = () =>
    imgs.map((img, i) => {
      return (
        <swiper-slide key={img.url}>
          <a target="_blank" href={img.url}>
            <img src={img.src} />
          </a>
        </swiper-slide>
      );
    });
  return (
    <div className="carousel-wrapper">
      <div className="carousel-hint">
        <img src={hint} className="" />
      </div>
      <swiper-container
        effect={isMobile ? "cube" : "slide"}
        centeredSlides="true"
        rewind="true"
        autoplay="true"
        autoplay-delay={4000}
      >
        {generateSlides()}
      </swiper-container>
    </div>
  );
};

export default Carousel;
