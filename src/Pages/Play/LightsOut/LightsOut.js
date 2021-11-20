// @ts-check
import React, { useEffect } from "react";

import "./LightsOut.scss";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import SEO from "../../../Components/Structural/SEO/SEO";
import Waves from "../../../Components/Background/Waves/Waves";

/**
 * @description A simple game of Lights Out.
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.2.0
 * @component
 * @example
 * <LightsOut />
 */
export default function LightsOut() {
  useEffect(() => {
    const theGame = document.querySelector("#the-game");
    const resetButton = document.querySelector("header button");

    function main() {
      resetButton.addEventListener("click", resetGame);
      theGame.addEventListener("click", turnLightsOut);
      resetGame();
    }

    function resetGame() {
      var divs = document.querySelectorAll("#the-game > button");
      for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add("out");
      }
      clickRandomLights();
      resetMoveCounter();
    }

    function resetMoveCounter() {
      const moveCounter = document.querySelector("#js-moves");
      moveCounter.innerHTML = (0).toString();
    }

    function clickRandomLights() {
      const numberOfLightsToTurnOn = Math.floor(Math.random() * 8) + 5;
      for (var i = 0; i < numberOfLightsToTurnOn; i++) {
        const randomNumber = Math.floor(Math.random() * 25) + 1;
        toggleLight(document.querySelector(`#a${randomNumber}`));
        toggleAdjacentLights(document.querySelector(`#a${randomNumber}`));
      }
    }

    function turnLightsOut(event) {
      const element = event.target;
      if (element.id !== "the-game") {
        toggleLight(element);
        toggleAdjacentLights(element);
        updateMoveCounter();
        checkForWin();
      }
    }

    function updateMoveCounter() {
      const moveCounter = document.querySelector("#js-moves");
      const previousMoveCount = Number(moveCounter.innerHTML);
      moveCounter.innerHTML = String(previousMoveCount + 1);
    }

    function toggleLight(element) {
      element.classList.toggle("out");
    }

    function toggleAdjacentLights(element) {
      const targetElementID = parseInt(element.id.slice(1), 10);
      const leftLightID = targetElementID - 1;
      const rightLightID = targetElementID + 1;
      const topLightID = targetElementID - 5;
      const bottomLightID = targetElementID + 5;
      switch (targetElementID) {
        case 1:
          toggleLight(document.querySelector(`#a${rightLightID}`));
          toggleLight(document.querySelector(`#a${bottomLightID}`));
          break;
        case 2:
        case 3:
        case 4:
          toggleLight(document.querySelector(`#a${leftLightID}`));
          toggleLight(document.querySelector(`#a${rightLightID}`));
          toggleLight(document.querySelector(`#a${bottomLightID}`));
          break;
        case 5:
          toggleLight(document.querySelector(`#a${leftLightID}`));
          toggleLight(document.querySelector(`#a${bottomLightID}`));
          break;
        case 6:
        case 11:
        case 16:
          toggleLight(document.querySelector(`#a${topLightID}`));
          toggleLight(document.querySelector(`#a${rightLightID}`));
          toggleLight(document.querySelector(`#a${bottomLightID}`));
          break;
        case 7:
        case 8:
        case 9:
        case 12:
        case 13:
        case 14:
        case 17:
        case 18:
        case 19:
          toggleLight(document.querySelector(`#a${topLightID}`));
          toggleLight(document.querySelector(`#a${rightLightID}`));
          toggleLight(document.querySelector(`#a${leftLightID}`));
          toggleLight(document.querySelector(`#a${bottomLightID}`));
          break;
        case 10:
        case 15:
        case 20:
          toggleLight(document.querySelector(`#a${topLightID}`));
          toggleLight(document.querySelector(`#a${leftLightID}`));
          toggleLight(document.querySelector(`#a${bottomLightID}`));
          break;
        case 21:
          toggleLight(document.querySelector(`#a${topLightID}`));
          toggleLight(document.querySelector(`#a${rightLightID}`));
          break;
        case 22:
        case 23:
        case 24:
          toggleLight(document.querySelector(`#a${topLightID}`));
          toggleLight(document.querySelector(`#a${leftLightID}`));
          toggleLight(document.querySelector(`#a${rightLightID}`));
          break;
        case 25:
          toggleLight(document.querySelector(`#a${topLightID}`));
          toggleLight(document.querySelector(`#a${leftLightID}`));
          break;
        default:
          break;
      }
    }

    function checkForWin() {
      const gameBoard = document.querySelectorAll("#the-game > button");
      for (var i = 0; i < gameBoard.length; i++) {
        if (!gameBoard[i].classList.contains("out")) {
          return false;
        }
      }
      const newHighScore = logBestMoves();
      if (newHighScore === null) {
        window.alert("You Won!");
      } else {
        window.alert(
          `You Won!\nNew High Score: ${newHighScore}\nCongratulations!`
        );
      }
      resetGame();
    }

    function logBestMoves() {
      const currentBest = document.querySelector("#js-best");
      const thisGame = document.querySelector("#js-moves");
      const currentBestCount = Number(currentBest.innerHTML);
      const thisGameCount = Number(thisGame.innerHTML);
      if (thisGameCount < currentBestCount) {
        currentBest.innerHTML = String(thisGameCount);
        return thisGameCount;
      } else if (currentBestCount === 0) {
        currentBest.innerHTML = String(thisGameCount);
        return thisGameCount;
      }
      return null;
    }

    main();
  }, []);
  return (
    <StandardWrapper headerDecoration={false}>
      <Waves />
      <div className="LightsOutContainer">
        <SEO title="Lights Out" />
        <header className="Lights-Out-Header">
          <PageTitle>Lights Out</PageTitle>
          <p>
            There is one objective: <i>turn all the lights out</i>.
          </p>
          <p>
            A white square indicates that the light is on, and a dark square
            indicates that the light is off.
          </p>
          <button type="button" name="reset-game">
            Reset
          </button>
          <div id="stats-box">
            <div id="move-counter">
              <p>Moves:</p>
              <p id="js-moves">0</p>
            </div>
            <div id="best-moves">
              <p>Best:</p>
              <p id="js-best">0</p>
            </div>
          </div>
        </header>
        <div id="the-game">
          <button id="a1" className="out"></button>
          <button id="a2" className="out"></button>
          <button id="a3" className="out"></button>
          <button id="a4" className="out"></button>
          <button id="a5" className="out"></button>
          <button id="a6" className="out"></button>
          <button id="a7" className="out"></button>
          <button id="a8" className="out"></button>
          <button id="a9" className="out"></button>
          <button id="a10" className="out"></button>
          <button id="a11" className="out"></button>
          <button id="a12" className="out"></button>
          <button id="a13" className="out"></button>
          <button id="a14" className="out"></button>
          <button id="a15" className="out"></button>
          <button id="a16" className="out"></button>
          <button id="a17" className="out"></button>
          <button id="a18" className="out"></button>
          <button id="a19" className="out"></button>
          <button id="a20" className="out"></button>
          <button id="a21" className="out"></button>
          <button id="a22" className="out"></button>
          <button id="a23" className="out"></button>
          <button id="a24" className="out"></button>
          <button id="a25" className="out"></button>
        </div>
      </div>
    </StandardWrapper>
  );
}
