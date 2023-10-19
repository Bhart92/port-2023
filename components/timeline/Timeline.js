import { appData } from "../../data/appData";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { isReduced } from "../../utils/animations";
import useIsDesktopSize from "../../utils/useIsDesktopSize.js";
import dynamic from "next/dynamic";

const Timeline = () => {
  const { isDesktopSize, isTabletSize } = useIsDesktopSize();
  const { timelineContent } = appData;

  const generateTimelineEles = () => {
    const TimelineElement = dynamic(() => import("./TimelineElement"), {
      ssr: true,
    });
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
    <VerticalTimeline
      animate={!isReduced ? true : false}
      layout={isDesktopSize || isTabletSize ? "2-columns" : "1-column"}
    >
      {generateTimelineEles()}
    </VerticalTimeline>
  );
};

export default Timeline;
