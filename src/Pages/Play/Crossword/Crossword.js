import { Helmet } from "react-helmet";
import React, { useState } from "react";

import { GrowingGreen } from "./puzzles/GrowingGreenCW";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import ReactCrossword from "./ReactCrossword/javascripts/crosswords/crossword";

import "./Crossword.scss";
import Waves from "../../../Components/Background/Waves/Waves";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import SEO from "../../../Components/Structural/SEO/SEO";

/**
 * @function Crossword
 * @description A component that handles playing crossword games
 * @author Alexander Burdiss
 * @since 6/23/21
 * @version 1.1.0
 * @component
 * @example
 * <Crossword />
 */
export default function Crossword() {
  // eslint-disable-next-line no-unused-vars
  const [currentCrossword, setCurrentCrossword] = useState(GrowingGreen);
  return (
    <StandardWrapper>
      <div className="Crossword-Container">
        <Waves />
        <SEO title={`Crossword - ${currentCrossword.name}`} />
        <PageTitle>Crossword - {currentCrossword.name}</PageTitle>
        <div className="Game-Container">
          <ReactCrossword data={currentCrossword} />
          <div>{currentCrossword.author}</div>
        </div>
      </div>
    </StandardWrapper>
  );
}
