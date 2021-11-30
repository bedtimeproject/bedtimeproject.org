import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import SudokuComponent from "./Sudoku";

const Sudoku = (props) => (
  <Router>
    <SudokuComponent {...props} />
  </Router>
);

test("renders Sudoku", () => {
  render(<Sudoku />);
});
