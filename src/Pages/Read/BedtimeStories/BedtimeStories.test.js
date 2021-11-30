import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import BedtimeStoriesComponent from "./BedtimeStories";

const BedtimeStories = (props) => (
  <Router>
    <BedtimeStoriesComponent {...props} />
  </Router>
);

describe("renders BedtimeStories", () => {
  test("renders base component", () => {
    render(<BedtimeStories />);
  });
});
