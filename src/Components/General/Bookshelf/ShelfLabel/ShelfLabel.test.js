import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import ShelfLabelComponent from "./ShelfLabel";

const ShelfLabel = (props) => (
  <Router>
    <ShelfLabelComponent link="#" {...props} />
  </Router>
);

describe("renders ShelfLabel", () => {
  test("renders base component", () => {
    render(<ShelfLabel />);
  });
});
