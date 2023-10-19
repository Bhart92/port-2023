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
  isVideo,
}) => {
  const contentStyles = {
    background: "#FFF",
    color: "#000",
    borderRadius: "25px",
    borderBottom: "none",
  };
  const generateMedia = () => {
    if (isVideo) {
      return (
        <figure>
          <video controls>
            <source src={projectImg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>
      );
    } else {
      return (
        <figure className="basis-1/2 flex items-align justify-start mr-5">
          <Image
            src={projectImg}
            width={450}
            height={450}
            alt="generic img desc"
          />
        </figure>
      );
    }
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
      {" "}
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
            {generateMedia()}
          </a>
        </div>
      ) : (
        ""
      )}
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
