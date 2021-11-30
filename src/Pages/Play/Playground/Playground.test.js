import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PlaygroundComponent from "./Playground";

const Playground = (props) => (
  <Router>
    <PlaygroundComponent {...props} />
  </Router>
);

test("renders Playground", () => {
  render(<Playground />);
});
