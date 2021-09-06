import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import DefaultAttribution from "./DefaultAttribution";

test("renders DefaultAttribution", () => {
  render(
    <Router>
      <DefaultAttribution background={"#FFFFFF"} backlink={"/"} />
    </Router>
  );
});
