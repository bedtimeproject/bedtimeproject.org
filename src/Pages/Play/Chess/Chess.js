import React, { useState, useEffect } from "react";
import ChessBoard from "../../../Components/General/ChessBoard/ChessBoard";
import ChessJs from "chess.js";

import "./Chess.scss";

/**
 * @namespace Chess
 * @function Chess
 * @description A game of chess on the website, themed to use pieces that are
 * from characters on the site.
 * @author Alexander Burdiss
 * @since 9/6/21
 * @version 1.0.0
 */
export default function Chess() {
  const [board, setBoard] = useState([]);
  useEffect(function setupBoard() {
    const game = new ChessJs();
    setBoard(game.board());
  }, []);
  return (
    <div className="Chess-Container">
      <ChessBoard board={board} />
    </div>
  );
}
