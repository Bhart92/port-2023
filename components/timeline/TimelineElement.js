import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styles from "./timeline.module.scss";

const TimelineElement = ({
  title,
  desc,
  timeLineIcon,
  timeLineIconAlt,
  date,
  creator,
  projectImg,
  imageAlt,
  url,
  courseList,
  setImgsLoaded,
}) => {
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
      <div
        className={`${styles.timelineElementHeader} flex flex-col items-center justify-center`}
      >
        <h2 className="timeline-element text-center text-3xl font-bold">{title}</h2>
        {creator ? <h3>{creator}</h3> : ""}

        <div className="timeline-element-desc w-11/12">
          <p className="text-base">{desc}</p>
        </div>
      </div>
      {courseList && courseList.length > 0 && generateListItems()}
      {projectImg ? (
        <div
          className={`${styles.timelineElementImage} flex items-center justify-center`}
        >
          <a href={url ? url : ""} target="_blank">
            <figure className="basis-1/2 flex items-center justify-center mt-2 md:justify-start md:mr-5">
              <Image
                priority={true}
                placeholder="blur"
                blurDataURL={projectImg}
                src={projectImg}
                width={450}
                height={450}
                alt={imageAlt}
                placeholder="blur"
                blurDataURL={projectImg}
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
