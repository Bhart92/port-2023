import React, { useLayoutEffect, useState } from "react";
import { appData } from "../data/appData";
import { gsap } from "gsap";
import LoadingView from "./LoadingView";
import SectionTitle from "../components/reusables/SectionTitle";
const PortfolioView = ({ onImagesLoaded }) => {
  const { projects } = appData;
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useLayoutEffect(() => {
    let loadAnimationTl = gsap.timeline();
    loadAnimationTl.to("header", {
      transform: "translate(0, 0)",
      delay: 0.05,
    });

    const container = document.querySelector(".portfolio-body-wrapper");

    onImagesLoaded(container, () => {
      console.log("fired images about");
      container.classList.add("active");
      setImagesLoaded(true);
    });
  }, []);

  const generateMedia = (project) => {
    const { isVideo, image, imageAlt } = project;
    if (isVideo) {
      return (
        <video controls>
          <source src={image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <img src={image} alt={imageAlt} />;
    }
  };
  const generateProjectMarkup = () => {
    return (
      projects &&
      projects?.map((project) => {
        return (
          <div className="portfolio-project-wrapper" key={project.title}>
            <div className="portfolio-project-img">
              {generateMedia(project)}
            </div>
            <div className="portfolio-project-body">
              <h2 className="portfolio-project-url">
                <a href={project.url}>{project.title}</a>
              </h2>
              <span className="portfolio-project-tech project-text">
                {project.tech}
              </span>

              <span className="portfolio-project-description project-text">
                {project.description}
              </span>
            </div>
          </div>
        );
      })
    );
  };

  return (
    <div className="portfolio section-body">
      <SectionTitle content={"Portfolio"} />
      {!imagesLoaded && <LoadingView text={"Loading portfolio content..."} />}
      <div className="portfolio-body-wrapper">{generateProjectMarkup()}</div>
    </div>
  );
};

export default PortfolioView;

// review portfolio and about content
// final optimization
