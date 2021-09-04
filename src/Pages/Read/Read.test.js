import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Read from "./Read";

test("renders Read", () => {
  render(
    <Router>
      <Read />
    </Router>
  );
});
