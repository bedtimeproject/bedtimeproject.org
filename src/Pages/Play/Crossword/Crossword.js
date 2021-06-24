import React, { useState } from "react";
import "./Crossword.scss";
import ReactCrossword from "./ReactCrossword/javascripts/crosswords/crossword";

import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import { GrowingGreen } from "./GrowingGreenCW";

/**
 * @function Crossword
 * @description A component that handles playing crossword games
 * @author Alexander Burdiss
 * @since 6/23/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Crossword />
 * ```
 */
export default function Crossword() {
  // eslint-disable-next-line no-unused-vars
  const [currentCrossword, setCurrentCrossword] = useState(GrowingGreen);
  return (
    <div className="Crossword-Container">
      <PageTitle>Crossword - {currentCrossword.name}</PageTitle>
      <div className="Game-Container">
        <ReactCrossword data={currentCrossword} />
        <div>{currentCrossword.author}</div>
      </div>
    </div>
  );
}
