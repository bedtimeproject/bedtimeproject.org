import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Stories from "./Stories";

test("renders Stories", () => {
  render(
    <Router>
      <Stories />
    </Router>
  );
});
