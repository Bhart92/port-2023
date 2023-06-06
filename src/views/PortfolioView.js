import React, { useEffect, useState } from "react";
import { appData } from "../data/appData";
import LoadingView from "./LoadingView";
import { revealHeader } from "../js/animations";
import Projects from "../components/projects/Projects";
import SectionTitle from "../components/reusables/SectionTitle";
import onImagesLoaded from "../js/imageloadCheck";

const PortfolioView = () => {
  const { projects } = appData;
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    revealHeader();
    const container = document.querySelector(".portfolio-body-wrapper");
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

  return (
    <div className="portfolio section-body">
      <SectionTitle content={"Portfolio"} />
      {!imagesLoaded && <LoadingView text={"Loading portfolio content..."} />}
      <Projects projects={projects} />
    </div>
  );
};

export default PortfolioView;

// review portfolio and about content
// final optimization
