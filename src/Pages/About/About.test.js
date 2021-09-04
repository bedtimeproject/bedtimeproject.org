import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./About";

test("renders About", () => {
  render(
    <Router>
      <About />
    </Router>
  );
});
