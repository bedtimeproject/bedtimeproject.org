import React from "react";
import ScrollAnimation from "scroll-animation";

import SEO from "../../../../Components/Structural/SEO/SEO";

import story from "./TheGuideToSunsetData";
import "./TheGuideToSunset.scss";

/**
 * @function TheGuideToSunset
 * @description A scroll animation built in React. This is the first scroll
 * animation of this project built using React.
 * @author Alexander Burdiss
 * @since 6/4/21
 * @version 1.3.0
 * @component
 * @example
 * <TheGuideToSunset />
 */
export default function TheGuideToSunset() {
  return (
    <div className="TheGuideToSunset-Container">
      <SEO title={story.title} />
      <ScrollAnimation story={story} />
    </div>
  );
}
