import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

test("renders Header", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
});
