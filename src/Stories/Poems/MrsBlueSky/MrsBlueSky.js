/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import { useEffect } from "react";

import HeaderCloud2 from "./images/HeaderCloud2.svg";
import HeaderCloud from "./images/HeaderCloud.svg";
import PaperAirplane from "./images/PaperAirplane.svg";
import Moon from "./images/Moon.svg";
import SadDogImage from "./images/SadDogImage.svg";
import Dragon from "./images/Dragon.svg";
import Cow from "./images/Cow.svg";
import ComicPow from "./images/ComicPow.svg";
import Sun from "./images/Sun.svg";
import SunsetCloud from "./images/SunsetCloud.svg";
import SunsetCloud2 from "./images/SunsetCloud2.svg";
import Mountain from "./images/Mountain.svg";
import WindCloud from "./images/WindCloud.svg";
import BoyFrisbee from "./images/BoyFrisbee.svg";
import Frisbee from "./images/Frisbee.svg";
import HighDog from "./images/HighDog.svg";
import Lightning from "./images/Lightning.svg";

import "./MrsBlueSky.css";

export default function MrsBlueSky() {
  useEffect(() => {
    function handleScroll() {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="MrsBlueSkyContainer">
      <main className="Poem">
        <div className="Poem-Meta-Info">
          <img src={HeaderCloud2} className="Header-Cloud-2" />
          <img src={HeaderCloud} className="Header-Cloud" />
          <h1 className="Poem-Title">Mrs. Blue Sky</h1>
          <h2 className="Poem-Author">Daniel Stigmon</h2>
          <img src={PaperAirplane} className="Paper-Airplane" />
          <img src={Moon} className="Moon" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza First-Stanza">
            <p>Please Ms. Blue Sky</p>
            <p>I need some aid</p>
            <p>My fluffy white dog</p>
            <p>Is starting to fade</p>
          </div>
          <img src={SadDogImage} className="Sad-Dog-Image" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Second-Stanza">
            <p>It looks like a dragon </p>
            <p>And now like a cow</p>
            <p>It looks like the ring</p>
            <p>Around the word “POW”</p>
          </div>
          <img src={Dragon} className="Dragon" />
          <img src={Cow} className="Cow" />
          <img src={ComicPow} className="Comic-Pow" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Third-Stanza">
            <p>Please Ms. Blue Sky</p>
            <p>Bring my friend back</p>
            <p>Be it over that mountain</p>
            <p>Or back in a sack</p>
          </div>
          <img src={Sun} className="Sun" />
          <img src={SunsetCloud} className="Sunset-Cloud" />
          <img src={SunsetCloud2} className="Sunset-Cloud-2" />
          <img src={Mountain} className="Mountain" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Fourth-Stanza">
            <p>Bring him back on the wind</p>
            <p>Like a frisbee in flight</p>
            <p>Because playtime without him</p>
            <p>just isn't alright.</p>
          </div>
          <img src={WindCloud} className="Wind-Cloud" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Fifth-Stanza">
            <p>I miss how we’d play</p>
            <p>For an hour a day</p>
            <p>How his fur would flop</p>
            <p>In all sorts of ways</p>
          </div>
          <img src={BoyFrisbee} className="Boy-Frisbee" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Sixth-Stanza">
            <p>I’d throw a frisbee</p>
            <p>It’d go right through</p>
            <p>He was my best friend </p>
            <p>I think… don’t you?</p>
          </div>
          <img src={Frisbee} className="Frisbee" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Seventh-Stanza">
            <p>Oh! What’s that I see </p>
            <p>At the edge of the sky</p>
            <p>My dog doesn’t usually </p>
            <p>go that high...</p>
          </div>
          <img src={HighDog} className="High-Dog" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Eighth-Stanza">
            <p>I suppose it is time</p>
            <p>I best go and hide</p>
            <p>My dogs turned to thunder</p>
            <p>I’m going inside</p>
          </div>
          <img src={Lightning} className="Lightning" />
        </div>
      </main>
      <div className="Poem-Credits">
        <p>Written by Daniel Stigmon</p>
        <p>Animated by Alexander Burdiss</p>
      </div>
    </div>
  );
}
