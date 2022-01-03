import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import FourOhFour from "./404";

test("renders 404", () => {
  render(
    <Router>
      <HelmetProvider>
        <FourOhFour />
      </HelmetProvider>
    </Router>
  );
  const header = screen.queryByText(/404 Error/);
  expect(header).not.toBeNull();
});
