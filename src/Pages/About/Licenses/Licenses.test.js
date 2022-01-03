import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

import LicensesComponent from "./Licenses";

const Licenses = (props) => (
  <Router>
    <HelmetProvider>
      <LicensesComponent {...props} />
    </HelmetProvider>
  </Router>
);

test("renders Licenses", () => {
  render(<Licenses />);
});
