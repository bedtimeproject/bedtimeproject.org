import { Helmet } from "react-helmet";
import React from "react";

import ScrollAnimation from "scroll-animation";

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
      <Helmet>
        <title>{story.title} | The Bedtime Project</title>
      </Helmet>
      <ScrollAnimation story={story} />
    </div>
  );
}
