import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import StandardWrapperComponent from "./StandardWrapper";

const StandardWrapper = (props) => (
  <Router>
    <StandardWrapperComponent {...props} />
  </Router>
);

describe("renders StandardWrapper", () => {
  test("renders base component", () => {
    render(<StandardWrapper />);
  });
});
