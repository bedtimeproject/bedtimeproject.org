import React from "react";

import DailyLimerickButton from "../../Components/Buttons/DailyLimerickButton/DailyLimerickButton";
import DoorButton from "../../Components/Buttons/DoorButton/DoorButton";

import StoriesImage from "./doors/Stories.svg";
import AboutUsImage from "./doors/AboutUs.svg";
import PlaygroundImage from "./doors/Playground.svg";
import Fireflies from "../../Components/Background/Fireflies/Fireflies";

/**
 * @function Home
 * @description The contents to render on the front page of the website.
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Home />
 * ```
 */
export default function Home() {
  return (
    <div className="Home-Container">
      <Fireflies />
      <div className="Home-Door-Container">
        <DoorButton label="Stories" image={StoriesImage} link="/stories" />
        <DoorButton label="Play" image={PlaygroundImage} link="/play" />
        <DoorButton label="About Us" image={AboutUsImage} link="/about" />
      </div>
      <DailyLimerickButton />
    </div>
  );
}
