import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TheGuideToSunset from "./TheGuideToSunset";

test("renders TheGuideToSunset", () => {
  render(
    <Router>
      <TheGuideToSunset />
    </Router>
  );
});
