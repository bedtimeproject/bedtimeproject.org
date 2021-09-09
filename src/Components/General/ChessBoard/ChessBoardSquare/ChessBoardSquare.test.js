import { render } from "@testing-library/react";
import ChessBoardSquare from "./ChessBoardSquare";

describe("renders ChessBoardSquare", () => {
  test("renders base component", () => {
    render(<ChessBoardSquare />);
  });
});
