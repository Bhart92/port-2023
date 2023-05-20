import React from "react";

const Project = ({ project }) => {
  const { title, url, tech, description, isVideo, image, imageAlt } = project;
  const generateMedia = () => {
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
  const generateURL = () => {
    if (isVideo) {
      return;
    } else {
      return (
        <a className="portfolio-project-url" target="_blank" href={url}>
          Click here to visit
        </a>
      );
    }
  };
  return (
    <div className="portfolio-project-wrapper" key={title}>
      <div className="portfolio-project-img">{generateMedia(project)}</div>
      <div className="portfolio-project-body">
        <h2 className="portfolio-project-title">{title} </h2>
        <span className="portfolio-project-tech project-text">{tech}</span>

        <span className="portfolio-project-description project-text">
          {description}
        </span>
        {generateURL()}
      </div>
    </div>
  );
};

export default Project;
