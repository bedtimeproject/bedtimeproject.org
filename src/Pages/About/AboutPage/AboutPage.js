import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.scss";

import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import Contributor from "../Contributor/Contributor";
import Checkerboard from "../../../Components/Background/Checkerboard/Checkerboard";

import FostyWally from "../../../assets/images/chess/FostyWally.png";
import CaptainCode from "../../../assets/images/chess/CaptainCode.png";

const AlexBio =
  "Captain Code spends his days working a pretty normal office job, but at night he spends his hours fighting digital crime on the internet. He listens to really cool music, and sometimes plays music of his own. Captain Code also has a lot of fun making websites, and animations.";
const DanielBio =
  "FostyWally spends the bulk of his days sailing the virtual seas, exploring the different nooks and crannies that have never been explored, and talking to interesting people all over the world. He is searching for _the_ story, a story so majestic it would make a rhino do a backflip. He has yet to find this story, but one day he will find it, and share it with all the world through the Bedtime Project.";

/**
 * @function AboutPage
 * @description A page that renders information about the main contributors and
 * purpose of the site.
 * @author Alexander Burdiss
 * @since 6/10/21
 * @version 1.0.0
 * @component
 * @example
 * <AboutPage />
 */
export default function AboutPage() {
  return (
    <div className="AboutPage-Container">
      <Checkerboard primaryColor="red" secondaryColor="black" />
      <PageTitle>About</PageTitle>
      <div>
        The Bedtime Project aims at helping you get to sleep, or just have a fun
        evening with stories and games.
      </div>
      <div>Here are the people who make this site possible:</div>
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
      <Link to="/about/acknowledgements">Acknowledgements</Link>
      <Link to="./about/licenses">Licenses</Link>
    </div>
  );
}
