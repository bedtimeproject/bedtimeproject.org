import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import FooterComponent from "./Footer";

const Footer = (props) => (
  <Router>
    <FooterComponent {...props} />
  </Router>
);

test("renders Footer", () => {
  render(<Footer />);
});
