import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import ParentsComponent from "./Parents";

const Parents = (props) => (
  <Router>
    <ParentsComponent {...props} />
  </Router>
);

describe("renders Parents", () => {
  test("renders base component", () => {
    render(<Parents />);
  });
});
