import React from "react";
import hint from "../../images/carousel-hint.png";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { isMobile } from "mobile-device-detect";
import { appData } from "../../data/appData";

// register Swiper custom elements
register();
const Carousel = () => {
  const { images } = appData;

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
        slides-per-view={isMobile ? "1" : "3"}
        slides-per-group={1}
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
