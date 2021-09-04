import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TheLadyAndTheFrog from "./TheLadyAndTheFrog";

test("renders TheLadyAndTheFrog", () => {
  render(
    <Router>
      <TheLadyAndTheFrog />
    </Router>
  );
});
