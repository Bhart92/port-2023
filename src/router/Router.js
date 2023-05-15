import React from "react";
import LandingView from "../views/LandingView";
import AboutView from "../views/AboutView";
import PortfolioView from "../views/PortfolioView";
import ContactView from "../views/ContactView";
import { Route, Routes } from "react-router-dom";
const Router = () => {
  const onImagesLoaded = (container, event) => {
    const images = container.getElementsByTagName("img");
    let loaded = images.length;
    for (let i = 0; i < images.length; i++) {
      if (images[i].complete) {
        loaded--;
      } else {
        images[i].addEventListener("load", function () {
          loaded--;
          if (loaded === 0) {
            event();
          }
        });
      }
      if (loaded === 0) {
        event();
      }
    }
  };
  return (
    <Routes>
      <Route index path="/" element={<LandingView />} />
      <Route
        path="about"
        element={<AboutView onImagesLoaded={onImagesLoaded} />}
      />
      <Route
        path="portfolio"
        element={<PortfolioView onImagesLoaded={onImagesLoaded} />}
      />
      <Route path="contact" element={<ContactView />} />
    </Routes>
  );
};

export default Router;
