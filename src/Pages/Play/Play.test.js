import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Play from "./Play";

test("renders Play", () => {
  render(
    <Router>
      <HelmetProvider>
        <Play />
      </HelmetProvider>
    </Router>
  );
});
