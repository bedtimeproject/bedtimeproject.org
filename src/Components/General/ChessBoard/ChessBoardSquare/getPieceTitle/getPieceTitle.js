/**
 * @todo Write tests for this function
 *
 * @function getPieceTitle
 * @description Gets a tooltip for the piece to use on hover.
 * @param {Object|null} pieceData One piece provided by Chess.js API
 * @returns {string} A string to use as a tooltip on the particular piece
 * @author Alexander Burdiss
 * @since 9/8/21
 * @version 1.0.0
 */
export function getPieceTitle(pieceData) {
  if (!pieceData) {
    return "";
  }

  let piece = "";

  if (pieceData.color == "b") {
    piece = piece + "Black";
  } else {
    piece = piece + "White";
  }

  piece = piece + " ";

  switch (pieceData.type) {
    case "k":
      piece = piece + "King";
      break;
    case "q":
      piece = piece + "Queen";
      break;
    case "b":
      piece = piece + "Bishop";
      break;
    case "n":
      piece = piece + "Knight";
      break;
    case "r":
      piece = piece + "Rook";
      break;
    case "p":
    default:
      piece = piece + "Pawn";
      break;
  }

  return piece;
}
