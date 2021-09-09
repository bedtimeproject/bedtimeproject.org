import React from "react";
import "./ChessBoardSquare.scss";

import { getPieceTitle } from "./getPieceTitle/getPieceTitle";

/**
 * @namespace ChessBoardSquare
 * @function ChessBoardSquare
 * @author Alexander Burdiss
 * @since 09/08/21
 * @version 1.0.0
 * @component
 */
export default function ChessBoardSquare({ squareData }) {
  return (
    <span
      className={`ChessBoardSquare-Container ${
        squareData ? squareData.type : ""
      }${squareData ? squareData.color : ""}`}
      title={getPieceTitle(squareData)}
    />
  );
}
