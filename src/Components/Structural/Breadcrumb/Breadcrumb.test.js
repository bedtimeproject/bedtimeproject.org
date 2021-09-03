import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

test("renders Breadcrumb", () => {
  render(
    <Router>
      <Breadcrumb link="/">Home</Breadcrumb>
    </Router>
  );
});
