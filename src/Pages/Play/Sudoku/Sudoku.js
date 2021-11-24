// @ts-check
import React, { useEffect, useState } from "react";

import { shuffle } from "../../../utils/shuffle/shuffle";
import { puzzles } from "./puzzles";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

import "./Sudoku.scss";
import SEO from "../../../Components/Structural/SEO/SEO";
import Waves from "../../../Components/Background/Waves/Waves";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";

/**
 * @todo Add keyboard support
 *
 * @function Sudoku
 * @author Alexander Burdiss
 * @since 6/15/21
 * @version 1.1.1
 * @description A game of sudoku that handles validation, and allows user input
 * with the mouse or on a touch device.
 * @component
 * @example
 * <Sudoku />
 */
export default function Sudoku() {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const rowErrorClass = "rowError";
  const colErrorClass = "colError";
  const squareErrorClass = "squareError";

  const boxes = [
    ["A1", "B1", "C1", "A2", "B2", "C2", "A3", "B3", "C3"],
    ["D1", "E1", "F1", "D2", "E2", "F2", "D3", "E3", "F3"],
    ["G1", "H1", "I1", "G2", "H2", "I2", "G3", "H3", "I3"],
    ["A4", "B4", "C4", "A5", "B5", "C5", "A6", "B6", "C6"],
    ["D4", "E4", "F4", "D5", "E5", "F5", "D6", "E6", "F6"],
    ["G4", "H4", "I4", "G5", "H5", "I5", "G6", "H6", "I6"],
    ["A7", "B7", "C7", "A8", "B8", "C8", "A9", "B9", "C9"],
    ["D7", "E7", "F7", "D8", "E8", "F8", "D9", "E9", "F9"],
    ["G7", "H7", "I7", "G8", "H8", "I8", "G9", "H9", "I9"],
  ];

  const [focusedNumber, setFocusedNumber] = useState(1);
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  useEffect(function setupComponent() {
    /**
     * @function Sudoku~useEffect~setupComponent~window.win
     * @description A function that attaches to the window on mount, that allows
     * a developer to win the game instantly, only if the first board in the
     * easy collection is used. Used for testing purposes!
     * @author Alexander Burdiss
     * @since 6/18/21
     * @version 1.0.0
     */
    // @ts-ignore
    window.win = () => {
      function setText(id, number) {
        // @ts-ignore
        document.querySelector(`#${id}`).innerText = number;
      }
      setText("B1", "4");
      setText("C1", "9");
      setText("E1", "1");
      setText("I1", "2");
      setText("A2", "6");
      setText("C2", "3");
      setText("E2", "5");
      setText("G2", "8");
      setText("H2", "4");
      setText("I2", "7");
      setText("A3", "7");
      setText("C3", "5");
      setText("D3", "4");
      setText("F3", "8");
      setText("I3", "9");
      setText("A4", "2");
      setText("B4", "6");
      setText("C4", "1");
      setText("F4", "7");
      setText("G4", "4");
      setText("I4", "8");
      setText("A5", "3");
      setText("B5", "5");
      setText("C5", "8");
      setText("D5", "6");
      setText("F5", "4");
      setText("H5", "9");
      setText("A6", "4");
      setText("B6", "9");
      setText("C6", "7");
      setText("D6", "1");
      setText("G6", "3");
      setText("H6", "2");
      setText("A7", "1");
      setText("D7", "5");
      setText("F7", "3");
      setText("G7", "9");
      setText("H7", "7");
      setText("A8", "9");
      setText("E8", "7");
      setText("F8", "1");
      setText("H8", "6");
      setText("I8", "5");
      setText("A9", "5");
      setText("B9", "7");
      setText("E9", "4");
      setText("G9", "1");
      setText("H9", "8");
      setText("I9", "3");
      validateBoard();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * @function Sudoku~setupNewBoard
   * @description Sets up a new board with the current difficulty taken into
   * account, handles validation, and resetting the board to a new state.
   * @author Alexander Burdiss
   * @since 6/22/21
   * @version 1.0.0
   */
  function setupNewBoard() {
    removeAllLockedSquares();
    removeFocus();
    const board = getNewBoard();
    setupBoard(board);
    validateBoard();
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(setupNewBoard, [difficulty]);

  /**
   * @function Sudoku~removeAllLockedSquares
   * @description Removes all locked squares. This is used when changing the
   * board to a new board, so that valid squares can be played.
   * @author Alexander Burdiss
   * @since 6/22/21
   * @version 1.0.0
   */
  function removeAllLockedSquares() {
    document
      .querySelectorAll(".locked")
      .forEach((node) => node.classList.remove("locked"));
  }

  /**
   * @function Sudoku~removeFocus
   * @description Removes the focus from the currently selected square.
   * @author Alexander Burdiss
   * @since 6/22/21
   * @version 1.0.0
   */
  function removeFocus() {
    document.querySelector(".focused")?.classList.remove("focused");
  }

  /**
   * @function Sudoku~getNewBoard
   * @description Gets a new board with the currently selected difficulty,
   * if there is a new board to get
   * @author Alexander Burdiss
   * @since 6/22/21
   * @version 1.0.0
   * @returns {Array[]} A two dimensional array of Numbers, to be used as a
   * new board for Sudoku.
   */
  function getNewBoard() {
    let boards = puzzles[difficulty];
    let currentBoardFirstFour = "";

    // @ts-ignore
    const currentBoardFirst = document.querySelector("#A1").innerText;
    currentBoardFirstFour = currentBoardFirst == "" ? "0" : currentBoardFirst;

    // @ts-ignore
    const currentBoardSecond = document.querySelector("#A2").innerText;
    currentBoardFirstFour =
      currentBoardFirstFour +
      (currentBoardSecond == "" ? "0" : currentBoardSecond);

    // @ts-ignore
    const currentBoardThird = document.querySelector("#A3").innerText;
    currentBoardFirstFour =
      currentBoardFirstFour +
      (currentBoardThird == "" ? "0" : currentBoardThird);

    // @ts-ignore
    const currentBoardFourth = document.querySelector("#A4").innerText;
    currentBoardFirstFour =
      currentBoardFirstFour +
      (currentBoardFourth == "" ? "0" : currentBoardFourth);

    let newFirstFour;
    if (boards.length > 1) {
      do {
        boards = shuffle(boards);
        let newFirstRow = boards[0][0];
        newFirstFour =
          newFirstRow[0].toString() +
          newFirstRow[1].toString() +
          newFirstRow[2].toString() +
          newFirstRow[3].toString();
      } while (newFirstFour == currentBoardFirstFour);
    }
    return boards[0];
  }

  /**
   * @function Sudoku~setupBoard
   * @param {Array[]} board A two dimensional array of integers that represent
   * the starting configuration for a board.
   * @description Adds all of the numbers from one board to the DOM, in the
   * correct placement.
   * @author Alexander Burdiss
   * @since 6/16/21
   * @version 1.0.0
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
        } else {
          currentElement.innerText = "";
        }
        counter++;
      }
      letterIndex++;
    }
  }
  /**
   * @function Sudoku~handleBoxClick
   * @param {Event} event The event that is triggered when a box on the game
   * board is clicked
   * @description Adds the current focused state to the board, and adds the
   * correct number that is selected to the sqare that is clicked. This will
   * this will also remove a number if the same one exists in the unlocked
   * box that is clicked.
   * @author Alexander Burdiss
   * @since 6/16/21
   * @version 1.0.0
   */
  function handleBoxClick(event) {
    // @ts-ignore
    if (!event.target.classList.contains("locked")) {
      // @ts-ignore
      if (event.target.innerText == focusedNumber) {
        // @ts-ignore
        event.target.innerText = "";
        validateBoard();
      } else {
        const previousFocusedElement = document.querySelector(".focused");
        if (previousFocusedElement) {
          previousFocusedElement.classList.remove("focused");
        }
        addNumber(event);
        // @ts-ignore
        event.target.classList.add("focused");
        document.querySelector("div").style.pointerEvents = "none";
      }
    }
    setTimeout(function () {
      document.querySelector("div").style.pointerEvents = "auto";
    }, 1000);
  }

  /**
   * @function Sudoku~handleNumberClick
   * @description Changes the currently selected number to the one that the
   * user clicked.
   * @param {Number} number The new number that was clicked by the user.
   * @param {Event} event The event that triggered the new number change.
   * @author Alexander Burdiss
   * @since 6/16/21
   * @version 1.0.0
   */
  function handleNumberClick(number, event) {
    setFocusedNumber(number);
    const previousFocusedElement = document.querySelector(".active");
    if (previousFocusedElement) {
      previousFocusedElement.classList.remove("active");
    }
    // @ts-ignore
    event.target.classList.add("active");
  }

  /**
   * @function Sudoku~addNumber
   * @description Adds the focused number to the target of the event that
   * triggered a new number.
   * @param {Event} event The event that triggered the number to be added to
   * the board
   * @author Alexander Burdiss
   * @since 6/16/21
   * @version 1.0.0
   */
  function addNumber(event) {
    // @ts-ignore
    event.target.innerText = focusedNumber;
    validateBoard();
  }

  /**
   * @function Sudoku~validateBoard
   * @description Handles checking all of the different validation methods for
   * the board, and puts error classes on all conflicting numbers on the board.
   * This function will also trigger the win, if all of the numbers are filled
   * in and there are no errors.
   * @author Alexander Burdiss
   * @since 6/16/21
   * @version 1.0.0
   */
  function validateBoard() {
    validateRows();
    validateColumns();
    validateSquares();
    const win = checkForWin();
    if (win) {
      document.querySelector(".Board").classList.add("win");
      setModalIsShowing(true);
    }
  }

  /**
   * @function Sudoku~validateRows
   * @description Validates all of the rows on the board, and adds the
   * appropriate error classes to the board.
   * @author Alexander Burdiss
   * @since 6/16/21
   * @version 1.0.0
   */
  function validateRows() {
    document.querySelectorAll(`.${rowErrorClass}`).forEach((node) => {
      node.classList.remove(rowErrorClass);
    });

    for (let number of numbers) {
      const usedLetters = [];

      for (let letter of letters) {
        const boardNumber = document.querySelector(`#${letter}${number}`);
        for (let usedLetter of usedLetters) {
          if (
            // @ts-ignore
            usedLetter.innerText &&
            // @ts-ignore
            usedLetter.innerText == boardNumber.innerText
          ) {
            usedLetter.classList.add(rowErrorClass);
            boardNumber.classList.add(rowErrorClass);
          }
        }
        // @ts-ignore
        if (boardNumber.innerText) {
          usedLetters.push(boardNumber);
        }
      }
    }
  }

  /**
   * @function Sudoku~validateColumns
   * @description Validates all of the columns on the board, and adds the
   * appropriate error classes to the board.
   * @author Alexander Burdiss
   * @since 6/16/21
   * @version 1.0.0
   */
  function validateColumns() {
    document.querySelectorAll(`.${colErrorClass}`).forEach((node) => {
      node.classList.remove(colErrorClass);
    });

    for (let letter of letters) {
      const usedNumbers = [];

      for (let number of numbers) {
        const boardNumber = document.querySelector(`#${letter}${number}`);
        for (let usedNumber of usedNumbers) {
          if (
            // @ts-ignore
            usedNumber.innerText &&
            // @ts-ignore
            usedNumber.innerText == boardNumber.innerText
          ) {
            usedNumber.classList.add(colErrorClass);
            boardNumber.classList.add(colErrorClass);
          }
        }

        // @ts-ignore
        if (boardNumber.innerText) {
          usedNumbers.push(boardNumber);
        }
      }
    }
  }

  /**
   * @function Sudoku~validateSquares
   * @description Validates all of the squares on the board, and adds the
   * appropriate error classes to the board.
   * @author Alexander Burdiss
   * @since 6/16/21
   * @version 1.0.0
   */
  function validateSquares() {
    document.querySelectorAll(`.${squareErrorClass}`).forEach((node) => {
      node.classList.remove(squareErrorClass);
    });

    for (let box of boxes) {
      const usedNumbers = [];
      for (let square of box) {
        const boardNumber = document.querySelector(`#${square}`);
        for (let usedNumber of usedNumbers) {
          if (
            // @ts-ignore
            usedNumber.innerText &&
            // @ts-ignore
            usedNumber.innerText == boardNumber.innerText
          ) {
            usedNumber.classList.add(squareErrorClass);
            boardNumber.classList.add(squareErrorClass);
          }
        }

        // @ts-ignore
        if (boardNumber.innerText) {
          usedNumbers.push(boardNumber);
        }
      }
    }
  }

  /**
   * @function Sudoku~checkForWin
   * @description Checks the board for meeting the winning conditions: no
   * errors and all squares filled out.
   * @returns {Boolean} Whether the user has won, or not.
   * @author Alexander Burdiss
   * @since 6/17/21
   * @version 1.0.0
   */
  function checkForWin() {
    for (let letter of letters) {
      for (let number of numbers) {
        const element = document.querySelector(`#${letter}${number}`);
        // @ts-ignore
        if (!element.innerText) {
          return false;
        }
      }
    }

    const rowErrors = document.querySelectorAll(`.${rowErrorClass}`);
    if (rowErrors.length) {
      return false;
    }
    const colErrors = document.querySelectorAll(`.${colErrorClass}`);
    if (colErrors.length) {
      return false;
    }
    const squareErrors = document.querySelectorAll(`.${squareErrorClass}`);
    if (squareErrors.length) {
      return false;
    }

    return true;
  }

  /**
   * @function Sudoku~playAgain
   * @description Handles the button "Play Again" that renders after a user
   * wins the game once.
   * @author Alexander Burdiss
   * @since 6/18/21
   * @version 1.0.0
   */
  function playAgain() {
    document.querySelector(".win").classList.remove("win");
    setModalIsShowing(false);
    const board = getNewBoard();
    setupBoard(board);
    validateBoard();
  }

  return (
    <StandardWrapper headerDecoration={false}>
      <div className="Sudoku-Container">
        <Waves />
        <SEO title="Sudoku" />
        <PageTitle>Sudoku</PageTitle>
        <div className="Game-Container">
          <div className="Difficulty-Buttons">
            <button
              onClick={() => {
                setDifficulty("easy");
              }}
              className={`Difficulty-Button ${
                difficulty == "easy" ? "highlighted" : ""
              }`}
            >
              Easy
            </button>
            <button
              onClick={() => {
                setDifficulty("medium");
              }}
              className={`Difficulty-Button ${
                difficulty == "medium" ? "highlighted" : ""
              }`}
            >
              Medium
            </button>
            <button
              onClick={() => {
                setDifficulty("hard");
              }}
              className={`Difficulty-Button ${
                difficulty == "hard" ? "highlighted" : ""
              }`}
            >
              Hard
            </button>
          </div>
          <div className="Main-Game-Container">
            <div
              className="Board"
              // @ts-ignore
              onClick={handleBoxClick}
            >
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
                // @ts-ignore
                onClick={(event) => handleNumberClick(1, event)}
                className="active"
              >
                1
              </button>
              <button
                onClick={(event) =>
                  handleNumberClick(
                    2,
                    // @ts-ignore
                    event
                  )
                }
              >
                2
              </button>
              <button
                onClick={(event) =>
                  handleNumberClick(
                    3,
                    // @ts-ignore
                    event
                  )
                }
              >
                3
              </button>
              <button
                onClick={(event) =>
                  handleNumberClick(
                    4,
                    // @ts-ignore
                    event
                  )
                }
              >
                4
              </button>
              <button
                onClick={(event) =>
                  handleNumberClick(
                    5,
                    // @ts-ignore
                    event
                  )
                }
              >
                5
              </button>
              <button
                onClick={(event) =>
                  handleNumberClick(
                    6,
                    // @ts-ignore
                    event
                  )
                }
              >
                6
              </button>
              <button
                onClick={(event) =>
                  handleNumberClick(
                    7,
                    // @ts-ignore
                    event
                  )
                }
              >
                7
              </button>
              <button
                onClick={(event) =>
                  handleNumberClick(
                    8,
                    // @ts-ignore
                    event
                  )
                }
              >
                8
              </button>
              <button
                onClick={(event) =>
                  handleNumberClick(
                    9,
                    // @ts-ignore
                    event
                  )
                }
              >
                9
              </button>
            </div>
          </div>
          <div className="WinModal-Container">
            <button onClick={setupNewBoard} className="Difficulty-Button">
              New Game
            </button>
            {modalIsShowing && (
              <div className="WinModal">
                <div className="WinModal-Box">
                  <h2>Congratulations!</h2>
                  <button onClick={playAgain}>Play Again</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </StandardWrapper>
  );
}
