import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Quips from "./Quips";

test("renders Quips", () => {
  render(
    <Router>
      <Quips />
    </Router>
  );
});
