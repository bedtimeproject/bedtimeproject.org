import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

import AcknowledgementsComponent from "./Acknowledgements";

const Acknowledgements = (props) => (
  <Router>
    <HelmetProvider>
      <AcknowledgementsComponent {...props} />
    </HelmetProvider>
  </Router>
);

test("renders Acknowledgements", () => {
  render(<Acknowledgements />);
});
