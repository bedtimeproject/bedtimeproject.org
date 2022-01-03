import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import Read from "./Read";

test("renders Read", () => {
  render(
    <Router>
      <HelmetProvider>
        <Read />
      </HelmetProvider>
    </Router>
  );
});
