import React, { useEffect, useState } from "react";
import { isReduced, revealLanding } from "../js/animations";
import LandingButtons from "../components/landing/LandingButtons";
import Carousel from "../components/carousel/Carousel";
import PhotoGrid from "../components/photoGrid/PhotoGrid";
import LoadingView from "./LoadingView";
import onImagesLoaded from "../js/imageloadCheck";
import { appData } from "../data/appData";

const LandingView = () => {
  const { images } = appData;
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".landing");
    const body = document.querySelector("body");

    onImagesLoaded(container, () => {
      container.classList.add("active");
      body.classList.add("active");
      setImagesLoaded(true);
    });

    return () => {
      body.classList.remove("active");
    };
  }, []);
  useEffect(() => {
    if (imagesLoaded) revealLanding();
  }, [imagesLoaded]);
  return (
    <div className="landing section-body">
      {!imagesLoaded && <LoadingView text={"Loading content..."} />}

      <div className="landing-hero">
        <div className="landing-title">
          <h1>
            Hi! <span>I'm Brandon</span>
          </h1>
          <h2>&lt; Web Developer /&gt;</h2>
        </div>
        <LandingButtons />

        <PhotoGrid />
        <Carousel />
      </div>
    </div>
  );
};

export default LandingView;
