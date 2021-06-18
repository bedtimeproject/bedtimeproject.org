import { useEffect } from "react";
import "./Playground.scss";

import RotatingCubes from "../../../Components/Background/RotatingCubes/RotatingCubes";
import StoryButton from "../../../Components/Buttons/StoryButton/StoryButton";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

import { json } from "./playgroundData";

/**
 * @description A story generator that generates a new story each time the
 * button is clicked.
 * @author Alexander Burdiss
 * @since 5/12/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Playground />
 * ```
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
    var prize = [];

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
    var prizeContainer = document.querySelector("#js-prize");

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
      prizeContainer.innerHTML =
        prize[Math.floor(Math.random() * prize.length)];
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
      if (json[object]["Prize"]) {
        prize.push(json[object]["Prize"]);
      }
    }

    loadStory();
  }, []);
  return (
    <article about="/play/playground">
      <div className="Playground-Container">
        <div className="Playground-Background-Color" />
        <RotatingCubes />

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
              <span id="js-second-character-name"></span>
              <span id="js-second-character"></span>
            </div>
          </div>

          <div className="Story-Content-Container">
            <h2>The Problem</h2>
            <div className="Story-Content">
              <span id="js-problem"></span>
            </div>
          </div>

          <div className="Story-Content-Container Story-Villian-Container">
            <h2>The Villian</h2>
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
              You discover the villian's weakness,{" "}
              <span id="js-villain-weakness"></span>
            </div>
          </div>

          <div className="Story-Content-Container Story-Reward-Container">
            <h2>Your Reward</h2>
            <div className="Story-Content">
              Congratulations! You won <span id="js-prize"></span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
