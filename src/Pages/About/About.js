import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import React from "react";

import Acknowledgements from "./Acknowledgements/Acknowledgements";
import Breadcrumb from "../../Components/Structural/Breadcrumb/Breadcrumb";
import Licenses from "./Licenses/Licenses";

import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import Contributor from "../../Components/General/Contributor/Contributor";
import Checkerboard from "../../Components/Background/Checkerboard/Checkerboard";

import FostyWally from "../../assets/images/chess/FostyWally.png";
import CaptainCode from "../../assets/images/chess/CaptainCode.png";

import "./About.scss";
import StoryButton from "../../Components/Buttons/StoryButton/StoryButton";

const AlexBio =
  "Captain Code spends his days working a pretty normal office job, but at night he spends his hours fighting digital crime on the internet. He listens to really cool music, and sometimes plays music of his own. Captain Code also has a lot of fun making websites, and animations.";
const DanielBio =
  "FostyWally spends the bulk of his days sailing the virtual seas, exploring the different nooks and crannies that have never been explored, and talking to interesting people all over the world. He is searching for _the_ story, a story so majestic it would make a rhino do a backflip. He has yet to find this story, but one day he will find it, and share it with all the world through the Bedtime Project.";

/**
 * @function About
 * @description Information about the contributors of the site, and about the
 * site itself.
 * @author Alexander Burdiss
 * @since 6/6/21
 * @version 1.2.0
 * @component
 * @example
 * ```jsx
 * <About />
 * ```
 */
export default function About() {
  return (
    <div>
      <Helmet>
        <title>About | The Bedtime Project</title>
      </Helmet>
      <Switch>
        <Route exact path="/about">
          <div className="AboutPage-Container">
            <Checkerboard primaryColor="red" secondaryColor="black" />
            <PageTitle>About</PageTitle>
            <div className="Description-Contianer">
              <div>
                The Bedtime Project aims at helping you get to sleep, or just
                have a fun evening with stories and games.
              </div>
              <div>Here are the people who make this site possible:</div>
            </div>
            <div className="All-Contributors-Container">
              <Contributor
                name="Captain Code (Alexander Burdiss)"
                bio={AlexBio}
                image={CaptainCode}
              />
              <Contributor
                name="FostyWally (Daniel Stigmon)"
                bio={DanielBio}
                image={FostyWally}
              />
            </div>
            <div className="Link-Container">
              <StoryButton link="/about/acknowledgements">
                Acknowledgements
              </StoryButton>
              <StoryButton link="./about/licenses">Licenses</StoryButton>
            </div>
          </div>
        </Route>
        <Route exact path="/about/acknowledgements">
          <Breadcrumb link="/about">About</Breadcrumb>
          <Acknowledgements />
        </Route>
        <Route exact path="/about/licenses">
          <Breadcrumb link="/about">About</Breadcrumb>
          <Licenses />
        </Route>
      </Switch>
    </div>
  );
}
