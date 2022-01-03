import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

import SudokuComponent from "./Sudoku";

const Sudoku = (props) => (
  <Router>
    <HelmetProvider>
      <SudokuComponent {...props} />
    </HelmetProvider>
  </Router>
);

test("renders Sudoku", () => {
  render(<Sudoku />);
});
