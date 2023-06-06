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
        1000: {
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
    images.map((img, i) => {
      return (
        <swiper-slide>
          <img src={img} />
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
        autoplay-delay={5500}
      >
        {generateSlides()}
      </swiper-container>
    </div>
  );
};

export default Carousel;
