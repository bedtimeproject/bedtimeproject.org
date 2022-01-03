import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

import BedtimeStoriesComponent from "./BedtimeStories";

const BedtimeStories = (props) => (
  <Router>
    <HelmetProvider>
      <BedtimeStoriesComponent {...props} />
    </HelmetProvider>
  </Router>
);

describe("renders BedtimeStories", () => {
  test("renders base component", () => {
    render(<BedtimeStories />);
  });
});
