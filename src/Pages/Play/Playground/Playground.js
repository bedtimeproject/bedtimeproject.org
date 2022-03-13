// @ts-check
import React, { useEffect, useState } from "react";

// Components
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import StoryButton from "../../../Components/Buttons/StoryButton/StoryButton";
import SEO from "../../../Components/Structural/SEO/SEO";
import Waves from "../../../Components/Background/Waves/Waves";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import AudioPlayer from "../../../Components/General/AudioPlayer/AudioPlayer";

// Styles
import "./Playground.scss";

// Assets
import json from "./playgroundData.json";
import sanityClient from "../../../client";

// Utilities
import { setupPlayground } from "./utils/setupPlayground";

/**
 * @function Playground
 * @description A story generator that generates a new story each time the
 * button is clicked.
 * @author Alexander Burdiss
 * @since 5/12/21
 * @version 2.0.1
 * @component
 * @example
 * <Playground />
 */
export default function Playground() {
  const [songs, setSongs] = useState([]);

  /**
   * @function fetchAudio
   * @description Handles grabbing all audio files from the server.
   */
  function fetchAudio() {
    sanityClient
      .fetch(
        `*[_type == "audio" && playground] {
        name,
        "url": audio.asset->url,
        attribution
      }`
      )
      .then(setSongs);
  }

  useEffect(function setupStoryGenerator() {
    setupPlayground(json);
    fetchAudio();
  }, []);

  return (
    <StandardWrapper headerDecoration={false}>
      <Waves />
      <article about="/play/playground">
        <SEO title="Playground" />
        <div className="Playground-Container">
          <div className="Playground-Background-Color" />

          <div className="TitleButtonContainer">
            <div>
              <PageTitle>Playground</PageTitle>

              <div className="Playground-Main-Button-Container">
                <StoryButton className="Main-Button">
                  Get a new story
                </StoryButton>
              </div>
            </div>

            <AudioPlayer
              src={songs[0]?.url}
              attribution={
                songs[0]?.attribution ? "Music By " + songs[0]?.attribution : ""
              }
            />
          </div>

          <div className="Story-Container">
            <div className="Story-Content-Container">
              <h2>Your Character</h2>
              <div className="Story-Content">
                <span id="js-name"></span> the <span id="js-description"></span>{" "}
                <span id="js-main-character"></span>
              </div>
            </div>

            <div className="Story-Content-Container">
              <h2>The Setting</h2>
              <div className="Story-Content">
                <div id="js-location"></div>
              </div>
            </div>

            <div className="Story-Content-Container">
              <h2>Your Sidekick</h2>
              <div className="Story-Content">
                <span id="js-second-character-name"></span>{" "}
                <span id="js-second-character"></span>
              </div>
            </div>

            <div className="Story-Content-Container">
              <h2>The Problem</h2>
              <div className="Story-Content">
                <span id="js-problem"></span>
              </div>
            </div>

            <div className="Story-Content-Container Story-Villain-Container">
              <h2>The Villain</h2>
              <div className="Story-Content">
                <span id="js-villain"></span>
              </div>
            </div>

            <div className="Story-Content-Container">
              <h2>Your Quest</h2>
              <div className="Story-Content">
                You need to go to <span id="js-where-travel"></span> using{" "}
                <span id="js-how-travel"></span>
              </div>
            </div>

            <div className="Story-Content-Container">
              <h2>Another Problem</h2>
              <div className="Story-Content">
                <span id="js-small-travel-conflict"></span>
              </div>
            </div>

            <div className="Story-Content-Container">
              <h2>The Final Scene</h2>
              <div className="Story-Content">
                You discover the villain's weakness,{" "}
                <span id="js-villain-weakness"></span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </StandardWrapper>
  );
}
