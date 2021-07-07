import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FourOhFour from "./404";

test("renders 404", () => {
  render(
    <Router>
      <FourOhFour />
    </Router>
  );
  const header = screen.queryByText(/404 Error/);
  expect(header).not.toBeNull();
});
