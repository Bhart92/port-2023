import React from "react";
import Project from "./Project";
const Projects = ({ projects }) => {
  const generateProjectMarkup = () =>
    projects &&
    projects?.map((project, i) => <Project key={i} project={project} />);

  return (
    <div className="portfolio-body-wrapper">{generateProjectMarkup()}</div>
  );
};

export default Projects;
