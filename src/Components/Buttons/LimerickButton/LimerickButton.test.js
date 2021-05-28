import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LimerickButton from "./LimerickButton";

test("renders LimerickButton", () => {
  render(
    <Router>
      <LimerickButton link="/">Limerick</LimerickButton>
    </Router>
  );
  const buttonText = screen.queryByText(/Limerick/);
  expect(buttonText).not.toBeNull();
});
