import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import LightsOutComponent from "./LightsOut";

const LightsOut = (props) => (
  <Router>
    <LightsOutComponent />
  </Router>
);
test("renders LightsOut", () => {
  render(<LightsOut />);
});
