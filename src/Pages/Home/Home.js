// @ts-check
import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";

import DoorButton from "../../Components/Buttons/DoorButton/DoorButton";
import Fireflies from "../../Components/Background/Fireflies/Fireflies";

import "./Home.scss";
import AboutUsImage from "../../assets/images/doors/AboutUs.svg";
import PlaygroundImage from "../../assets/images/doors/Playground.svg";
import StoriesImage from "../../assets/images/doors/Stories.svg";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import { getWeather } from "../../utils/getWeather/getWeather";
import Snow from "../../Components/Background/Snow/Snow";

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
  const [weather, setWeather] = useState("clear");
  useEffect(function setup() {
    setWeather(getWeather());
  }, []);
  return (
    <StandardWrapper>
      <div className="Home-Container">
        <Helmet>
          <title>The Bedtime Project</title>
        </Helmet>
        {weather !== "snow" && <Fireflies />}
        {weather == "snow" && (
          <div className="Snow-Home-Container">
            <Snow />
          </div>
        )}
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
      </div>
    </StandardWrapper>
  );
}
