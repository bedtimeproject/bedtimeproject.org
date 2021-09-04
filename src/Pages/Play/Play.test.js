import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Play from "./Play";

test("renders Play", () => {
  render(
    <Router>
      <Play />
    </Router>
  );
});
