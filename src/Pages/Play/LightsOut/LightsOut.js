import { Helmet } from "react-helmet";
import { useEffect } from "react";

import "./LightsOut.scss";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";

/**
 * @description A simple game of Lights Out.
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.1.0
 * @component
 * @example
 * ```jsx
 * <LightsOut />
 * ```
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
      var divs = document.querySelectorAll("#the-game > div");
      for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add("out");
      }
      clickRandomLights();
      resetMoveCounter();
    }

    function resetMoveCounter() {
      const moveCounter = document.querySelector("#js-moves");
      moveCounter.innerHTML = 0;
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
      const element = getElement(event);
      if (element.id !== "the-game") {
        toggleLight(element);
        toggleAdjacentLights(element);
        updateMoveCounter();
        checkForWin();
      }
    }

    function updateMoveCounter() {
      const moveCounter = document.querySelector("#js-moves");
      const previousMoveCount = parseInt(moveCounter.innerHTML, 10);
      moveCounter.innerHTML = previousMoveCount + 1;
    }

    function getElement(event) {
      const elementID = event.target.id;
      const elementSelector = "#" + elementID;
      return document.querySelector(elementSelector);
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
      const gameBoard = document.querySelectorAll("#the-game > div");
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
      const currentBestCount = parseInt(currentBest.innerHTML, 10);
      const thisGameCount = parseInt(thisGame.innerHTML, 10);
      if (thisGameCount < currentBestCount) {
        currentBest.innerHTML = thisGameCount;
        return thisGameCount;
      } else if (currentBestCount === 0) {
        currentBest.innerHTML = thisGameCount;
        return thisGameCount;
      }
      return null;
    }

    main();
  }, []);
  return (
    <StandardWrapper>
      <div className="LightsOutContainer">
        <Helmet>
          <title>Lights Out | The Bedtime Project</title>
        </Helmet>
        <header className="Lights-Out-Header">
          <h1>Lights Out</h1>
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
          <div id="a1" className="out"></div>
          <div id="a2" className="out"></div>
          <div id="a3" className="out"></div>
          <div id="a4" className="out"></div>
          <div id="a5" className="out"></div>
          <div id="a6" className="out"></div>
          <div id="a7" className="out"></div>
          <div id="a8" className="out"></div>
          <div id="a9" className="out"></div>
          <div id="a10" className="out"></div>
          <div id="a11" className="out"></div>
          <div id="a12" className="out"></div>
          <div id="a13" className="out"></div>
          <div id="a14" className="out"></div>
          <div id="a15" className="out"></div>
          <div id="a16" className="out"></div>
          <div id="a17" className="out"></div>
          <div id="a18" className="out"></div>
          <div id="a19" className="out"></div>
          <div id="a20" className="out"></div>
          <div id="a21" className="out"></div>
          <div id="a22" className="out"></div>
          <div id="a23" className="out"></div>
          <div id="a24" className="out"></div>
          <div id="a25" className="out"></div>
        </div>
      </div>
    </StandardWrapper>
  );
}
