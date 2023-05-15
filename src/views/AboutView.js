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

    onImagesLoaded(container, () => {
      container.classList.add("active");
      setImagesLoaded(true);
    });
  }, []);

  return (
    <div className="about section-body">
      <SectionTitle content={"About"} />
      {!imagesLoaded && <LoadingView text={"Loading timeline content..."} />}

      <div className="about-text-container">
        <p>
          I've always wanted to work in tech, but could never find the right
          corner that I felt I belonged. I tried leaning into the hardware side
          - but it couldn't keep my attention. I tried the network side - but I
          just didn't enjoy the work. I really thought tech just wasn't for me
          by the time I became a real estate appraiser in my mid twenties. That
          was until I met an individual who worked as a software engineer while
          performing an appraisal inspection. I expressed my interest in tech,
          but inability to find something I was passionate about. They suggested
          I look into web development and that night I began learning HTML and
          CSS - I quickly became obsessed. Looking back its hard to believe that
          inspection changed the trajectory of my life. Fast forward to today -
          I'm a Front End Developer - I've worked on projects for clients as
          large as Verizon, Disney, NBC, and more.
        </p>
      </div>
      <div className="about-timeline-wrapper">
        <SectionTitle content={"My dev journey"} />
        <Timeline />
      </div>
    </div>
  );
};

export default AboutView;
