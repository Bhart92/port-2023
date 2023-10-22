"use client";

import { incrementCounter } from "@/utils/useCheckImageLoad";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TimelineElement = ({
  title,
  desc,
  timeLineIcon,
  timeLineIconAlt,
  date,
  creator,
  projectImg,
  projectImgAlt,
  url,
  courseList,
  count,
  setImgsLoaded,
}) => {
  const contentStyles = {
    background: "#FFF",
    color: "#000",
    borderRadius: "25px",
    borderBottom: "none",
  };

  const generateListItems = () => (
    <div className="timeline-element-list">
      <ul>
        {courseList.map((course) => {
          return <li>{course}</li>;
        })}
      </ul>
    </div>
  );
  return (
    <VerticalTimelineElement
      className="timeline-element"
      contentStyle={contentStyles}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={date}
      iconStyle={{
        background: "rgb(255, 255, 255)",
        color: "#000",
        fontSize: "3.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <figure>
          <Image
            src={timeLineIcon}
            width={20}
            height={20}
            alt={timeLineIconAlt}
          />
        </figure>
      }
    >
      <div className="timeline-element-header">
        <h2 className="timeline-element text-center text-lg">{title}</h2>
        {creator ? <h3>{creator}</h3> : ""}

        <div className="timeline-element-desc w-11/12">
          <p>{desc}</p>
        </div>
      </div>
      {courseList && courseList.length > 0 && generateListItems()}
      {projectImg ? (
        <div className="timeline-element-image">
          <a target="_blank" href={url}>
            <figure className="basis-1/2 flex items-align justify-start mr-5">
              <Image
                priority={true}
                placeholder="empty"
                src={projectImg}
                width={450}
                height={450}
                alt={projectImgAlt}
                onLoad={() => {
                  incrementCounter(
                    count,
                    setImgsLoaded,
                    ".timeline-element-image img"
                  );
                }}
              />
            </figure>
          </a>
        </div>
      ) : (
        ""
      )}
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
