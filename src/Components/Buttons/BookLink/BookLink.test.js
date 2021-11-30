import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import BookLinkComponent from "./BookLink";

const BookLink = (props) => (
  <Router>
    <BookLinkComponent link="#" {...props} />
  </Router>
);

describe("renders BookLink", () => {
  test("renders base component", () => {
    render(<BookLink />);
  });
});
