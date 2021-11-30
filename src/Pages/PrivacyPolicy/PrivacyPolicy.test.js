import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PrivacyPolicyComponent from "./PrivacyPolicy";

const PrivacyPolicy = (props) => (
  <Router>
    <PrivacyPolicyComponent {...props} />
  </Router>
);

describe("renders PrivacyPolicy", () => {
  test("renders base component", () => {
    render(<PrivacyPolicy />);
  });
});
