import React from "react";
import ScrollAnimation from "../../../../Components/ScrollAnimation/ScrollAnimation";

import SEO from "../../../../Components/Structural/SEO/SEO";
import { useScrollAnimation } from "../../../../utils/useScrollAnimation/useScrollAnimation";

import story from "./SurfersHideawayStory.json";

/**
 * @namespace SurfersHideaway
 * @function SurfersHideaway
 * @description A wrapper for the Scroll Animation Story Surfer's Hideaway.
 * @author Alexander Burdiss
 * @since 12/27/21
 * @version 1.0.1
 */
export default function SurfersHideaway() {
  useScrollAnimation(story);

  return (
    <div className="SurfersHideawayContainer">
      <SEO title={story.title} themeColor="#FB8E49" />
      <ScrollAnimation story={story} />
    </div>
  );
}
