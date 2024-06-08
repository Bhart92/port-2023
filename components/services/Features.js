import ServiceCard from "./ServiceCard";
import { BsSpeedometer } from "react-icons/bs";
import { FaAccessibleIcon } from "react-icons/fa6";
import { FaSearchDollar } from "react-icons/fa";

const Features = (props) => {
  return (
    <>
      <ServiceCard
        link={true}
        url={"https://developers.google.com/speed"}
        title={"Performance"}
        icon={<BsSpeedometer />}
        desc={
          "I optimize for what major search engines seek when determining overall performance. Your website will be blazing fast by optimizing for exactly what search engines look for. Tap here to read more."
        }
      />
      <ServiceCard
        link={true}
        classes={"md:self-end md:flex-row-reverse"}
        url={
          "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility"
        }
        title={"Accessibility"}
        icon={<FaAccessibleIcon />}
        desc={
          "Web Accessibility allows users with disabiities to interact with your website and only works when engineered to. I will closely monitor each website's accessibility at every turn. Tap to read more"
        }
      />
      <ServiceCard
        link={true}
        url={"https://developers.google.com/speed"}
        title={"SEO"}
        icon={<FaSearchDollar />}
        desc={
          "SEO helps modern search engines crawl and index your website. I optimize SEO by choosing specific keywords and content to help push your website to the top of search results. Tap to learn more."
        }
      />
    </>
  );
};

export default Features;
