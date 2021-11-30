import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import FooterComponent from "./Footer";

const Footer = (props) => (
  <Router>
    <FooterComponent {...props} />
  </Router>
);

test("renders Footer", () => {
  render(<Footer />);
});

describe("footer renders correctly", () => {
  test("has privacy policy link", () => {
    render(<Footer />);
    const linkTextExists = screen.queryByText("Privacy Policy");
    expect(linkTextExists).toBeTruthy();
  });

  test("Copyright shows current date", () => {
    render(<Footer />);
    const thisYear = new Date().getFullYear();
    const thisYearInFooter = screen.queryByText(thisYear, { exact: false });
    expect(thisYearInFooter).toBeTruthy();
  });
});
