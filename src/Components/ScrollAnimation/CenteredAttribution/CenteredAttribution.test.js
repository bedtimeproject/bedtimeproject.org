import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import CenteredAttribution from "./CenteredAttribution";

test("renders CenteredAttribution", () => {
  render(
    <Router>
      <CenteredAttribution background={"#FFFFFF"} backlink={"/"} />
    </Router>
  );
});
