import { Helmet } from "react-helmet";
import React from "react";

import DailyLimerickButton from "../../Components/Buttons/DailyPoemButton/DailyPoemButton";
import DoorButton from "../../Components/Buttons/DoorButton/DoorButton";
import Fireflies from "../../Components/Background/Fireflies/Fireflies";

import "./Home.scss";
import AboutUsImage from "../../assets/images/doors/AboutUs.svg";
import PlaygroundImage from "../../assets/images/doors/Playground.svg";
import StoriesImage from "../../assets/images/doors/Stories.svg";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";

/**
 * @function Home
 * @description The contents to render on the front page of the website.
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 2.2.0
 * @component
 * @example
 * <Home />
 */
export default function Home() {
  return (
    <StandardWrapper>
      <div className="Home-Container">
        <Helmet>
          <title>The Bedtime Project</title>
        </Helmet>
        <Fireflies />
        <div className="Home-Door-Container">
          <DoorButton
            label="Read"
            image={StoriesImage}
            link="/read"
            alt="An earthy door framed by vines"
          />
          <DoorButton
            label="Play"
            image={PlaygroundImage}
            link="/play"
            alt="A door made of many small stained-glass panels"
          />
          <DoorButton
            label="About Us"
            image={AboutUsImage}
            link="/about"
            alt="A crooked wooden door"
          />
        </div>
        <DailyLimerickButton />
      </div>
    </StandardWrapper>
  );
}
