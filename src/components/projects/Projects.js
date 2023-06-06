import React from "react";
import Project from "./Project";
const Projects = ({ projects }) => {
  const generateProjectMarkup = () =>
    projects && projects?.map((project) => <Project project={project} />);

  return (
    <div className="portfolio-body-wrapper">{generateProjectMarkup()}</div>
  );
};

export default Projects;
