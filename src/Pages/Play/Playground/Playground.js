// @ts-check
import React, { useEffect } from "react";

// Components
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import StoryButton from "../../../Components/Buttons/StoryButton/StoryButton";
import SEO from "../../../Components/Structural/SEO/SEO";
import Waves from "../../../Components/Background/Waves/Waves";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";

// Styles
import "./Playground.scss";

// Assets
import json from "./playgroundData.json";

/**
 * @namespace Playground
 * @function Playground
 * @description A story generator that generates a new story each time the
 * button is clicked.
 * @author Alexander Burdiss
 * @since 5/12/21
 * @version 1.1.1
 * @component
 * @example
 * <Playground />
 */
export default function Playground() {
  useEffect(function setupStoryGenerator() {
    var names = [];
    var descriptions = [];
    var mainCharacters = [];
    var locations = [];
    var secondCharacters = [];
    var secondCharacterNames = [];
    var problems = [];
    var villains = [];
    var travelsTo = [];
    var travelsHow = [];
    var travelConflict = [];
    var villainWeakness = [];

    var nameContainer = document.querySelector("#js-name");
    var descriptionContainer = document.querySelector("#js-description");
    var mainCharacterContainer = document.querySelector("#js-main-character");
    var locationContainer = document.querySelector("#js-location");
    var secondCharacterNameContainer = document.querySelector(
      "#js-second-character-name"
    );
    var secondCharacterContainer = document.querySelector(
      "#js-second-character"
    );
    var problemContainer = document.querySelector("#js-problem");
    var villainContainer = document.querySelector("#js-villain");
    var whereTravelContainer = document.querySelector("#js-where-travel");
    var howTravelContainer = document.querySelector("#js-how-travel");
    var smallTravelConflictContainer = document.querySelector(
      "#js-small-travel-conflict"
    );
    var villainWeaknessContainer = document.querySelector(
      "#js-villain-weakness"
    );

    function loadStory() {
      nameContainer.innerHTML = names[Math.floor(Math.random() * names.length)];
      descriptionContainer.innerHTML =
        descriptions[Math.floor(Math.random() * descriptions.length)];

      mainCharacterContainer.innerHTML =
        mainCharacters[Math.floor(Math.random() * mainCharacters.length)];
      locationContainer.innerHTML =
        locations[Math.floor(Math.random() * locations.length)];
      secondCharacterNameContainer.innerHTML =
        secondCharacterNames[
          Math.floor(Math.random() * secondCharacterNames.length)
        ];
      secondCharacterContainer.innerHTML =
        secondCharacters[Math.floor(Math.random() * secondCharacters.length)];
      problemContainer.innerHTML =
        problems[Math.floor(Math.random() * problems.length)];
      villainContainer.innerHTML =
        villains[Math.floor(Math.random() * villains.length)];
      whereTravelContainer.innerHTML =
        travelsTo[Math.floor(Math.random() * travelsTo.length)];
      howTravelContainer.innerHTML =
        travelsHow[Math.floor(Math.random() * travelsHow.length)];
      smallTravelConflictContainer.innerHTML =
        travelConflict[Math.floor(Math.random() * travelConflict.length)];
      villainWeaknessContainer.innerHTML =
        villainWeakness[Math.floor(Math.random() * villainWeakness.length)];
    }

    document.querySelector(".Main-Button").addEventListener("click", loadStory);

    for (const object in json) {
      names.push(json[object]["Name"]);
      descriptions.push(json[object]["Description of Character"]);
      mainCharacters.push(json[object]["Main Character"]);
      locations.push(json[object]["Location"]);
      secondCharacters.push(json[object]["Second Character"]);
      secondCharacterNames.push(json[object]["Second Character Name"]);
      problems.push(json[object]["Problem"]);
      villains.push(json[object]["Villain"]);
      travelsTo.push(json[object]["Where You Travel"]);
      travelsHow.push(json[object]["How You Travel"]);
      if (json[object]["Something that happens while you travel"]) {
        travelConflict.push(
          json[object]["Something that happens while you travel"]
        );
      }
      villainWeakness.push(json[object]["Villain Weakness"]);
    }

    loadStory();
  }, []);
  return (
    <StandardWrapper headerDecoration={false}>
      <Waves />
      <article about="/play/playground">
        <SEO title="Playground" />
        <div className="Playground-Container">
          <div className="Playground-Background-Color" />

          <PageTitle>Playground</PageTitle>

          <div className="Playground-Main-Button-Container">
            <StoryButton className="Main-Button">Get a new story</StoryButton>
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
