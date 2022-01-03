import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import About from "./About";

test("renders About", () => {
  render(
    <Router>
      <HelmetProvider>
        <About />
      </HelmetProvider>
    </Router>
  );
});
