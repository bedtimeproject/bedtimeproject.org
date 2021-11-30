import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import DrawersComponent from "./Drawers";

const Drawers = (props) => (
  <Router>
    <DrawersComponent href="#" {...props} />
  </Router>
);

describe("renders Drawers", () => {
  test("renders base component", () => {
    render(<Drawers />);
  });
});
