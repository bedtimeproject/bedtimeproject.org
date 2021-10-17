import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MrsBlueSky from "./MrsBlueSky";

test("renders MrsBlueSky", () => {
  render(
    <Router>
      <MrsBlueSky />
    </Router>
  );
});
