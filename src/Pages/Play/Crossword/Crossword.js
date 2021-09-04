import { Helmet } from "react-helmet";
import React, { useState } from "react";

import { GrowingGreen } from "./puzzles/GrowingGreenCW";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import ReactCrossword from "./ReactCrossword/javascripts/crosswords/crossword";

import "./Crossword.scss";

/**
 * @function Crossword
 * @description A component that handles playing crossword games
 * @author Alexander Burdiss
 * @since 6/23/21
 * @version 1.1.0
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
      <Helmet>
        <title>Crossword - {currentCrossword.name} | The Bedtime Project</title>
      </Helmet>
      <PageTitle>Crossword - {currentCrossword.name}</PageTitle>
      <div className="Game-Container">
        <ReactCrossword data={currentCrossword} />
        <div>{currentCrossword.author}</div>
      </div>
    </div>
  );
}
