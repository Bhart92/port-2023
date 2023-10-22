"use client";

import { appData } from "../../data/appData";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { isReduced } from "../../utils/animations";
import useIsDesktopSize from "../../utils/useIsDesktopSize.js";
import TimelineElement from "./TimelineElement";

const Timeline = ({ count, imgsLoaded, setImgsLoaded }) => {
  const { isDesktopSize, isTabletSize } = useIsDesktopSize();
  const { timelineContent } = appData;

  const generateTimelineEles = () => {
    return timelineContent.map((timelineEle, i) => {
      return (
        <TimelineElement
          title={timelineEle.title}
          desc={timelineEle.desc}
          projectImg={timelineEle?.projectImg}
          projectImgAlt={timelineEle?.projectImgAlt}
          timeLineIcon={timelineEle.timeLineIcon}
          timeLineIconAlt={timelineEle.timeLineIconAlt}
          date={timelineEle.date}
          creator={timelineEle?.creator}
          url={timelineEle?.url}
          courseList={timelineEle?.courseList}
          key={i}
          count={count}
          setImgsLoaded={setImgsLoaded}
          imgsLoaded={imgsLoaded}
        />
      );
    });
  };
  return (
    <VerticalTimeline
      animate={!isReduced ? true : false}
      layout={isDesktopSize || isTabletSize ? "2-columns" : "1-column"}
    >
      {generateTimelineEles()}
    </VerticalTimeline>
  );
};

export default Timeline;
