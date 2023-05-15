import React from "react";
import TimelineElement from "./TimelineElement";
import { appData } from "../../data/appData";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  const { timelineContent } = appData;
  const generateTimelineEles = () => {
    return timelineContent.map((timelineEle) => {
      const { isVideo } = timelineEle;
      console.log("isVideo");
      console.log(isVideo);
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
          isVideo={isVideo}
        />
      );
    });
  };
  return <VerticalTimeline>{generateTimelineEles()}</VerticalTimeline>;
};

export default Timeline;
