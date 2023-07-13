/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

// Styles

import "./MrsBlueSky.scss";
// Components
import SEO from "../../../../Components/Structural/SEO/SEO";

// Images
import BoyFrisbee from "./images/BoyFrisbee.svg";
import ComicPow from "./images/ComicPow.svg";
import Cow from "./images/Cow.svg";
import Dragon from "./images/Dragon.svg";
import Frisbee from "./images/Frisbee.svg";
import HeaderCloud from "./images/HeaderCloud.svg";
import HeaderCloud2 from "./images/HeaderCloud2.svg";
import HighDog from "./images/HighDog.svg";
import Lightning from "./images/Lightning.svg";
import Moon from "./images/Moon.svg";
import Mountain from "./images/Mountain.svg";
import Aviantor from "../../../../assets/images/aviantor.png";
import SadDogImage from "./images/SadDogImage.svg";
import Sun from "./images/Sun.svg";
import SunsetCloud from "./images/SunsetCloud.svg";
import SunsetCloud2 from "./images/SunsetCloud.svg";
import WindCloud from "./images/WindCloud.svg";

/**
 * @namespace MrsBlueSky
 * @function MrsBlueSky
 * @description A scroll-animated poem. This was originally built using HTML, so
 * it does not currently follow React best practices.
 * @version 2.2.2
 * @author Alexander Burdiss
 * @since 5/14/21
 * @lastModified 11/30/21
 * @component
 * @example
 * <MrsBlueSky />
 */
export default function MrsBlueSky() {
  useEffect(() => {
    document.body.style.minHeight = "2000vh";
    function handleScroll() {
      document.body.style.setProperty(
        "--scroll",
        String(
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        )
      );
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.minHeight = "";
      document.body.style.removeProperty("--scroll");
    };
  }, []);

  return (
    <div className="MrsBlueSkyContainer">
      <SEO title="Mrs. Blue Sky" themeColor="#133061" />
      {/* Styles for the global object, just on this page */}
      <style>{`
        :root * {
          /* Pause the animation */
          animation-play-state: paused;
          /* Bind the animation to scroll */
          animation-delay: calc(var(--scroll) * -1s);
          /* These last 2 properites clean up overshoot weirdness */
          animation-iteration-count: 1;
          animation-fill-mode: both;
        }
      `}</style>
      <main className="Poem">
        <div className="Poem-Meta-Info">
          <img src={HeaderCloud2} className="Header-Cloud-2" alt="A cloud" />
          <img src={HeaderCloud} className="Header-Cloud" alt="A cloud" />
          <h1 className="Poem-Title">Mrs. Blue Sky</h1>
          <h2 className="Poem-Author">C.A. Moonbloom</h2>
          <img
            src={Aviantor}
            className="Paper-Airplane"
            alt="An ant riding a paper airplane"
          />
          <img src={Moon} className="Moon" alt="The moon" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza First-Stanza">
            <p>Please Ms. Blue Sky</p>
            <p>I need some aid</p>
            <p>My fluffy white dog</p>
            <p>Is starting to fade</p>
          </div>
          <img src={SadDogImage} className="Sad-Dog-Image" alt="A sad dog" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Second-Stanza">
            <p>It looks like a dragon </p>
            <p>And now like a cow</p>
            <p>It looks like the ring</p>
            <p>Around the word “POW”</p>
          </div>
          <img src={Dragon} className="Dragon" alt="A Dragon" />
          <img src={Cow} className="Cow" alt="A Cow" />
          <img src={ComicPow} className="Comic-Pow" alt="A comic book Pow!" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Third-Stanza">
            <p>Please Ms. Blue Sky</p>
            <p>Bring my friend back</p>
            <p>Be it over that mountain</p>
            <p>Or back in a sack</p>
          </div>
          <img src={Sun} className="Sun" alt="The Sun" />
          <img
            src={SunsetCloud}
            className="Sunset-Cloud"
            alt="A small colorful cloud"
          />
          <img
            src={SunsetCloud2}
            className="Sunset-Cloud-2"
            alt="Another small colorful cloud"
          />
          <img src={Mountain} className="Mountain" alt="A striking mountain" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Fourth-Stanza">
            <p>Bring him back on the wind</p>
            <p>Like a frisbee in flight</p>
            <p>Because playtime without him</p>
            <p>just isn't alright.</p>
          </div>
          <img
            src={WindCloud}
            className="Wind-Cloud"
            alt="A cloud blowing himself across the screen"
          />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Fifth-Stanza">
            <p>I miss how we’d play</p>
            <p>For an hour a day</p>
            <p>How his fur would flop</p>
            <p>In all sorts of ways</p>
          </div>
          <img
            src={BoyFrisbee}
            className="Boy-Frisbee"
            alt="A boy throwing a frisbee"
          />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Sixth-Stanza">
            <p>I’d throw a frisbee</p>
            <p>It’d go right through</p>
            <p>He was my best friend </p>
            <p>I think… don’t you?</p>
          </div>
          <img src={Frisbee} className="Frisbee" alt="A flying frisbee" />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Seventh-Stanza">
            <p>Oh! What’s that I see </p>
            <p>At the edge of the sky</p>
            <p>My dog doesn’t usually </p>
            <p>go that high...</p>
          </div>
          <img
            src={HighDog}
            className="High-Dog"
            alt="A small dog high in the sky"
          />
        </div>
        <div className="Poem-Stanza-Wrapper">
          <div className="Poem-Stanza Eighth-Stanza">
            <p>I suppose it is time</p>
            <p>I best go and hide</p>
            <p>My dogs turned to thunder</p>
            <p>I’m going inside</p>
          </div>
          <img
            src={Lightning}
            className="Lightning"
            alt="A bolt of lightning"
          />
        </div>
      </main>
      <div className="Poem-Credits">
        <p>Written by C.A. Moonbloom</p>
        <p>Animated by Captain Code</p>
        <Link to="/read/bedtime-stories" className="Back-Button">
          Back to site
        </Link>
      </div>
    </div>
  );
}
