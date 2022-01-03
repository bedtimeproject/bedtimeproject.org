import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

test("renders Home", () => {
  render(
    <Router>
      <HelmetProvider>
        <Home />
      </HelmetProvider>
    </Router>
  );
});
