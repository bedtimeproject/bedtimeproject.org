import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Tales from "./Tales";

test("renders Tales", () => {
  render(
    <Router>
      <Tales />
    </Router>
  );
});
