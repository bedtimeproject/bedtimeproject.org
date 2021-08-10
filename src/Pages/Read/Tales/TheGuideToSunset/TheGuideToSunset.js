import { Helmet } from "react-helmet";
import React from "react";

import ScrollAnimation from "../../../../Components/ScrollAnimation/ScrollAnimation";
import Attribution from "../../../../Components/ScrollAnimation/DefaultAttribution/DefaultAttribution";
import Body from "../../../../Components/ScrollAnimation/Body/Body";
import Title from "../../../../Components/ScrollAnimation/DefaultTitle/DefaultTitle";

import story from "./TheGuideToSunsetData";

import "./TheGuideToSunset.scss";

/**
 * @function TheGuideToSunset
 * @description A scroll animation built in React. This is the first scroll
 * animation of this project built using React.
 * @author Alexander Burdiss
 * @since 6/4/21
 * @version 1.2.0
 * @component
 * @example
 * ```jsx
 * <TheGuideToSunset />
 * ```
 */
export default function TheGuideToSunset() {
  return (
    <div className="TheGuideToSunset-Container">
      <Helmet>
        <title>{story.title} | The Bedtime Project</title>
      </Helmet>
      <ScrollAnimation bodyStyleMinHeight={`${story.body.length * 100}vh`}>
        <Title
          background={story.stanzaBackgroundColor}
          author={story.author}
          stanzaCount={story.body.length}
        >
          {story.title}
        </Title>
        <Body story={story} />
        <Attribution
          background={story.stanzaBackgroundColor}
          stanzaCount={story.body.length}
          backlink={"/poems/tales/"}
        >
          {story.attribution}
        </Attribution>
      </ScrollAnimation>
    </div>
  );
}
