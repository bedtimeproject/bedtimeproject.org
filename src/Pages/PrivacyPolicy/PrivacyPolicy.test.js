import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

import PrivacyPolicyComponent from "./PrivacyPolicy";

const PrivacyPolicy = (props) => (
  <Router>
    <HelmetProvider>
      <PrivacyPolicyComponent {...props} />
    </HelmetProvider>
  </Router>
);

describe("renders PrivacyPolicy", () => {
  test("renders base component", () => {
    render(<PrivacyPolicy />);
  });
});
