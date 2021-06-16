import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import QuipButton from "./QuipButton";

test("renders QuipButton", () => {
  render(
    <Router>
      <QuipButton link="/">Quips</QuipButton>
    </Router>
  );
  const buttonText = screen.queryByText(/Quips/);
  expect(buttonText).not.toBeNull();
});
