import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

import PlaygroundComponent from "./Playground";

const Playground = (props) => (
  <Router>
    <HelmetProvider>
      <PlaygroundComponent {...props} />
    </HelmetProvider>
  </Router>
);

test("renders Playground", () => {
  render(<Playground />);
});
