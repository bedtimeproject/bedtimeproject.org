import React from "react";
import "./ChessBoardSquare.scss";

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
    >
      {/* {squareData && typeof squareData == "object" ? (
        <>
          {squareData.type === "k" && squareData.color == "w" && (
            <img src={CaptainCode} alt="White King" />
          )}
          {squareData.type === "k" && squareData.color == "b" && (
            <img src={FostyWally} alt="Black King" />
          )}
          {squareData.type === "p" && squareData.color == "w" && (
            <img src={WhitePawn} alt="White Pawn" />
          )}
          {squareData.type === "p" && squareData.color == "b" && (
            <img src={BlackPawn} alt="Black Pawn" />
          )}
        </>
      ) : null} */}
    </span>
  );
}
