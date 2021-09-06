import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import ScrollAnimation from "./ScrollAnimation";

import { testStory } from "./testStory";

test("renders ScrollAnimation", () => {
  render(
    <Router>
      <ScrollAnimation story={testStory} />
    </Router>
  );
});
