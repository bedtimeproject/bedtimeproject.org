import React, { useState } from "react";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

/**
 * @todo Add keyboard support
 */
export default function Sudoku() {
  const [focusedSquare, setFocusedSquare] = useState(null);
  function handleBoxClick(event) {
    const previousFocusedElement = document.querySelector(".focused");
    if (previousFocusedElement) {
      previousFocusedElement.classList.remove("focused");
    }
    setFocusedSquare(event.target);
    event.target.classList.add("focused");
  }

  function addNumber(number) {
    focusedSquare.innerText = number;
  }
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
          <button onClick={() => addNumber(1)}>1</button>
          <button onClick={() => addNumber(2)}>2</button>
          <button onClick={() => addNumber(3)}>3</button>
          <button onClick={() => addNumber(4)}>4</button>
          <button onClick={() => addNumber(5)}>5</button>
          <button onClick={() => addNumber(6)}>6</button>
          <button onClick={() => addNumber(7)}>7</button>
          <button onClick={() => addNumber(8)}>8</button>
          <button onClick={() => addNumber(9)}>9</button>
        </div>
      </div>
    </div>
  );
}
