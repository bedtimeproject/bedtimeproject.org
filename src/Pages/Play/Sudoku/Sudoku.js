import React, { useEffect, useState } from "react";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

import { games } from "./games";

/**
 * @todo Add keyboard support
 *
 * @function Sudoku
 * @author Alexander Burdiss
 */
export default function Sudoku() {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [focusedNumber, setFocusedNumber] = useState(1);

  useEffect(function setupComponent() {
    const board = getRandomBoard();
    setupBoard(board);
  }, []);

  /**
   * @todo get Random board from boards
   */
  function getRandomBoard() {
    return games.easy[0];
  }

  /**
   * @function Sudoku~setupBoard
   * @param {*} board
   */
  function setupBoard(board) {
    let letterIndex = 0;

    for (let row of board) {
      let counter = 0;
      for (let number of row) {
        const currentElement = document.getElementById(
          `${letters[letterIndex]}${counter + 1}`
        );
        if (number != 0) {
          currentElement.innerText = number;
          currentElement.classList.add("locked");
        }
        counter++;
      }
      letterIndex++;
    }
  }

  /**
   * @function Sudoku~handleBoxClick
   * @param {Event} event
   */
  function handleBoxClick(event) {
    if (!event.target.classList.contains("locked")) {
      const previousFocusedElement = document.querySelector(".focused");
      if (previousFocusedElement) {
        previousFocusedElement.classList.remove("focused");
      }
      addNumber(event);
      event.target.classList.add("focused");
    }
  }

  function handleNumberClick(number, event) {
    setFocusedNumber(number);
    const previousFocusedElement = document.querySelector(".active");
    if (previousFocusedElement) {
      previousFocusedElement.classList.remove("active");
    }
    event.target.classList.add("active");
  }

  /**
   * @function Sudoku~addNumber
   * @param {Number} event
   */
  function addNumber(event) {
    event.target.innerText = focusedNumber;
    validateBoard();
  }

  /**
   * @function Sudoku~validateBoard
   */
  function validateBoard() {
    validateRows();
    validateColumns();
    validateSquares();
  }

  function validateRows() {
    for (let number of numbers) {
      const usedLetters = [];

      for (let letter of letters) {
        const boardNumber = document.getElementById(`${letter}${number}`)
          .innerText;
        if (boardNumber && usedLetters.includes(boardNumber)) {
          console.log("Row dupe", boardNumber);
        }
        usedLetters.push(boardNumber);
      }
    }
  }

  function validateColumns() {
    for (let letter of letters) {
      const usedLetters = [];
      for (let number of numbers) {
        const boardNumber = document.getElementById(`${letter}${number}`)
          .innerText;
        if (boardNumber && usedLetters.includes(boardNumber)) {
          console.log("Col dupe", boardNumber);
        }
        usedLetters.push(boardNumber);
      }
    }
  }

  function validateSquares() {}

  return (
    <div className="Sudoku-Container">
      <PageTitle>Sudoku</PageTitle>
      <div className="Game-Container">
        <div className="Board" onClick={handleBoxClick}>
          <div id="A1" />
          <div id="B1" />
          <div id="C1" />

          <div id="D1" />
          <div id="E1" />
          <div id="F1" />

          <div id="G1" />
          <div id="H1" />
          <div id="I1" />

          <div id="A2" />
          <div id="B2" />
          <div id="C2" />

          <div id="D2" />
          <div id="E2" />
          <div id="F2" />

          <div id="G2" />
          <div id="H2" />
          <div id="I2" />

          <div id="A3" />
          <div id="B3" />
          <div id="C3" />

          <div id="D3" />
          <div id="E3" />
          <div id="F3" />

          <div id="G3" />
          <div id="H3" />
          <div id="I3" />

          <div id="A4" />
          <div id="B4" />
          <div id="C4" />

          <div id="D4" />
          <div id="E4" />
          <div id="F4" />

          <div id="G4" />
          <div id="H4" />
          <div id="I4" />

          <div id="A5" />
          <div id="B5" />
          <div id="C5" />

          <div id="D5" />
          <div id="E5" />
          <div id="F5" />

          <div id="G5" />
          <div id="H5" />
          <div id="I5" />

          <div id="A6" />
          <div id="B6" />
          <div id="C6" />

          <div id="D6" />
          <div id="E6" />
          <div id="F6" />

          <div id="G6" />
          <div id="H6" />
          <div id="I6" />

          <div id="A7" />
          <div id="B7" />
          <div id="C7" />

          <div id="D7" />
          <div id="E7" />
          <div id="F7" />

          <div id="G7" />
          <div id="H7" />
          <div id="I7" />

          <div id="A8" />
          <div id="B8" />
          <div id="C8" />

          <div id="D8" />
          <div id="E8" />
          <div id="F8" />

          <div id="G8" />
          <div id="H8" />
          <div id="I8" />

          <div id="A9" />
          <div id="B9" />
          <div id="C9" />

          <div id="D9" />
          <div id="E9" />
          <div id="F9" />

          <div id="G9" />
          <div id="H9" />
          <div id="I9" />
        </div>

        <div className="NumberContainer">
          <button
            onClick={(event) => handleNumberClick(1, event)}
            className="active"
          >
            1
          </button>
          <button onClick={(event) => handleNumberClick(2, event)}>2</button>
          <button onClick={(event) => handleNumberClick(3, event)}>3</button>
          <button onClick={(event) => handleNumberClick(4, event)}>4</button>
          <button onClick={(event) => handleNumberClick(5, event)}>5</button>
          <button onClick={(event) => handleNumberClick(6, event)}>6</button>
          <button onClick={(event) => handleNumberClick(7, event)}>7</button>
          <button onClick={(event) => handleNumberClick(8, event)}>8</button>
          <button onClick={(event) => handleNumberClick(9, event)}>9</button>
        </div>
      </div>
    </div>
  );
}
