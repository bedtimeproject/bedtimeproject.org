import React from "react";
import "./Crossword.scss";
import ReactCrossword from "./ReactCrossword/javascripts/crosswords/crossword";

import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import { games } from "./games";

export default function Crossword() {
  return (
    <div className="Crossword-Container">
      <PageTitle>Crossword</PageTitle>
      <div className="Game-Container">
        <ReactCrossword data={games[0]} />
      </div>
    </div>
  );
}
