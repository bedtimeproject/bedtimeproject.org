import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import LicensesComponent from "./Licenses";

const Licenses = (props) => (
  <Router>
    <LicensesComponent {...props} />
  </Router>
);

test("renders Licenses", () => {
  render(<Licenses />);
});
