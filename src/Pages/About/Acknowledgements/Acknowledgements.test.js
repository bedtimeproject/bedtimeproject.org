import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import AcknowledgementsComponent from "./Acknowledgements";

const Acknowledgements = (props) => (
  <Router>
    <AcknowledgementsComponent {...props} />
  </Router>
);

test("renders Acknowledgements", () => {
  render(<Acknowledgements />);
});
