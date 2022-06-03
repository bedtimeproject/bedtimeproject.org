// @ts-check
import React, { useState, useEffect } from "react";

import "./LightsOut.scss";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import SEO from "../../../Components/Structural/SEO/SEO";
import Waves from "../../../Components/Background/Waves/Waves";
import Modal from "../../../Components/Structural/Modal/Modal";

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
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [modalMessage, setModalMessage] = useState("You Win!");

  const [moves, setMoves] = useState(0);
  const [best, setBest] = useState(0);

  function resetGame() {
    var divs = document.querySelectorAll("#the-game > button");
    for (var i = 0; i < divs.length; i++) {
      divs[i].classList.add("out");
    }
    clickRandomLights();
    setMoves(0);
  }

  function clickRandomLights() {
    const numberOfLightsToTurnOn = Math.floor(Math.random() * 8) + 5;
    for (var i = 0; i < numberOfLightsToTurnOn; i++) {
      const randomNumber = Math.floor(Math.random() * 25) + 1;
      toggleLight(document.querySelector(`#a${randomNumber}`));
      toggleAdjacentLights(document.querySelector(`#a${randomNumber}`));
    }
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

  function turnLightsOut(event) {
    const element = event.target;
    if (element.id !== "the-game") {
      toggleLight(element);
      toggleAdjacentLights(element);

      if (
        (() => {
          const gameBoard = document.querySelectorAll("#the-game > button");
          for (var i = 0; i < gameBoard.length; i++) {
            if (!gameBoard[i].classList.contains("out")) {
              return false;
            }
          }
          return true;
        })()
      ) {
        if (moves + 1 < best || best == 0) {
          setBest(moves + 1);
          setModalMessage(
            `You Won!\nNew High Score: ${moves + 1}\nCongratulations!`
          );
        } else {
          setModalMessage("You Win!");
        }
        setIsModalShowing(true);
      }
      setMoves((prev) => prev + 1);
    }
  }

  useEffect(() => {
    resetGame();
  }, [])

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
          <button type="button" name="reset-game" onClick={resetGame}>
            Reset
          </button>
          <div id="stats-box">
            <div id="move-counter">
              <p>Moves:</p>
              <span>{moves}</span>
            </div>
            <div id="best-moves">
              <p>Best:</p>
              <span>{best}</span>
            </div>
          </div>
        </header>
        <div onClick={turnLightsOut} id="the-game">
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
        {isModalShowing && (
          <Modal>
            <div
              className="LightsOutModalContainer"
              onClick={() => {
                resetGame();
                setIsModalShowing(false);
              }}
            >
              <div
                className="Wrapper"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="Border"></div>
                <div className="MainElement">
                  <h2>{modalMessage}</h2>
                  <button
                    onClick={() => {
                      resetGame();
                      setIsModalShowing(false);
                    }}
                    className="PlayAgainButton"
                  >
                    Play Again
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </StandardWrapper>
  );
}
