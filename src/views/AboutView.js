import React, { useEffect, useState } from "react";
import Timeline from "../components/timeline/Timeline";
import LoadingView from "./LoadingView";
import SectionTitle from "../components/reusables/SectionTitle";
import { revealHeader } from "../js/animations";
import onImagesLoaded from "../js/imageloadCheck";
const AboutView = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    revealHeader();
    const container = document.querySelector(".about-timeline-wrapper");

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
    <div className="about section-body">
      <SectionTitle content={"About"} />
      {!imagesLoaded && <LoadingView text={"Loading timeline content..."} />}
      <div className="about-wrapper">
        <div className="about-text-container">
          <p>
            I've worked as a professional web developer for the past three years
            with a focus in front-end technologies including React and Vue. In
            my time as a dev I have launched large budget projects for clients
            including Verizon, NBC, and PepsiCo. I've built modules enabling
            sales teams to expand across the US and helped build and maintain
            the web presence of several IPs. My expertise has allowed me to
            bring projects in under-budget while exceeding expectations. I love
            my work and look forward to new challenges everyday.
          </p>
        </div>
        <div className="about-timeline-wrapper">
          <SectionTitle content={"My dev journey"} />
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default AboutView;
