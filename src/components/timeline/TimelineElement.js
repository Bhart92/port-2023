import React from "react";

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
}) => {
  const contentStyles = {
    background: "#FFF",
    color: "#000",
    borderRadius: "25px",
    borderBottom: "none",
  };
  const generateListItems = () => {
    return (
      <div className="timeline-element-list">
        <ul>
          {courseList.map((course) => {
            return <li>{course}</li>;
          })}
        </ul>
      </div>
    );
  };
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
      icon={<img src={timeLineIcon} alt={timeLineIconAlt} />}
    >
      <div className="timeline-element-header">
        <h2 className="timeline-element">{title}</h2>
        {creator ? <h3>{creator}</h3> : ""}
      </div>
      <div className="timeline-element-desc">
        <p>{desc}</p>
      </div>
      {courseList && courseList.length > 0 && generateListItems()}
      {projectImg ? (
        <div className="timeline-element-image">
          <a href={url}>
            <img src={projectImg} alt={projectImgAlt} />
          </a>
        </div>
      ) : (
        ""
      )}
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
