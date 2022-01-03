import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import Quips from "./Quips";

test("renders Quips", () => {
  render(
    <Router>
      <HelmetProvider>
        <Quips />
      </HelmetProvider>
    </Router>
  );
});
