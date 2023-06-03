import React, { useEffect, useState } from "react";
import oswald from "../../images/oswald.jpg";
import avatar from "../../images/avatar.jpeg";
import brea from "../../images/brea.jpg";
import sb from "../../images/sb.jpg";
import burnie from "../../images/burnie.jpg";
import cornhole from "../../images/cornhole.jpg";
import culver from "../../images/culver.jpg";
import homerun from "../../images/homerun.jpg";
import hint from "../../images/carousel-hint.png";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { isMobile } from "mobile-device-detect";
import { isReduced } from "../../js/animations";
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
