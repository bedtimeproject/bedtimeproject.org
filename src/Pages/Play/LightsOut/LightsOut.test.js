import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

import LightsOutComponent from "./LightsOut";

const LightsOut = (props) => (
  <Router>
    <HelmetProvider>
      <LightsOutComponent />
    </HelmetProvider>
  </Router>
);
test("renders LightsOut", () => {
  render(<LightsOut />);
});
