import React from "react";
import TimelineElement from "./TimelineElement";
import { appData } from "../../data/appData";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { isReduced } from "../../js/animations";
const Timeline = () => {
  const { timelineContent } = appData;
  const generateTimelineEles = () => {
    return timelineContent.map((timelineEle, i) => {
      const { isVideo } = timelineEle;
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
          key={i}
        />
      );
    });
  };
  return (
    <VerticalTimeline animate={!isReduced ? true : false} layout={"2-columns"}>
      {generateTimelineEles()}
    </VerticalTimeline>
  );
};

export default Timeline;
