import React from "react";
import "./ChessBoard.scss";
import ChessBoardSquare from "./ChessBoardSquare/ChessBoardSquare";

/**
 * @namespace ChessBoard
 * @function ChessBoard
 * @description A chessboard to use on the Chess game page. Handles the visual
 * display of one chess game.
 * @author Alexander Burdiss
 * @since 9/6/21
 * @version 1.0.0
 */
export default function ChessBoard({ board }) {
  return (
    <div className="ChessBoard-Container">
      {board.map((row, index) => {
        return (
          <div
            key={index}
            className={`ChessBoard-Row ${
              index % 2 == 0 ? "Row-Even" : "Row-Odd"
            }`}
          >
            {row.map((square, rowIndex) => {
              return (
                <ChessBoardSquare
                  key={`${index}${rowIndex}`}
                  squareData={square}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
