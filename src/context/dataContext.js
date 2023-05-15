import React from "react";
import { isTablet, isMobile } from "mobile-device-detect";

const data = {
  projects: [
    {
      title: "Gainz Workout Randomizer",
      description:
        "Gainz Workout Randomizer helps users mix up there workout routine. Each workout has a link to youtube containing a query to that workout so users can learn how to do workouts as they generate them. This app was built purely using React and SCSS.",
      image: "/images/gainz.png",
      imageStatus: false,
      imageAlt: "Gainz Workout Randomizer App",
      url: "https://main--symphonious-twilight-127b7c.netlify.app/",
      tech: "React | React Hooks | SCSS",
    },
    {
      title: "Air Grades",
      description:
        "Air Grades provides users with real time air quality information for whatever area they wish to check. The app leverages the AirIQ api to retreieve data.",
      image: "/images/airGradesDesk.PNG",
      imageStatus: false,
      imageAlt: "Air Grades",
      url: "https://airgrades.herokuapp.com/",
      tech: "React | Redux | SCSS | AirIQ API",
    },
    {
      title: "Fractality",
      description:
        "A single page style application built for Fractality, an interactive media company. This web app uses GSAP to provide a dyamic feel to an otherwise static web experience.",
      image: "/images/fractality.PNG",
      imageStatus: false,
      imageAlt: "Fractality Interactive Media",
      url: "https://www.fractality.co/",
      tech: "React | SCSS | GSAP",
    },
    {
      title: "Pepsi PureLeaf Experience",
      description:
        "Users scan a tea bottle to activate the experience. They then tap to place a grid of animated bottles on pedestals. When a pedestal is tapped, a new array of columns reveal matching the flavor selected and showcasing said flavor with various fruits & tea leaves.",
      image: "/images/pureLeaf.gif",
      imageStatus: false,
      imageAlt: "Pepsi PureLeaf Experience",
      tech: "Vue JS | JavaScript | Playcanvas | SCSS | TensorFlow ML",
    },
    {
      title: "La Brea Sinkhole Experience",
      description:
        "Users place a 3d sinkhole in their environment and interact with the sinkhole to watch various items eject from another dimension.",
      image: "/images/sinkhole.gif",
      imageStatus: false,
      imageAlt: "FUSE",
      tech: "Vue JS | JavaScript | Playcanvas | SCSS",
    },
  ],
  getIsDesktop: (bool = false) => {
    if (!isTablet && !isMobile) {
      return true;
    } else {
      return false;
    }
  },
};

const DataContext = React.createContext(data);

export { DataContext as default };
