import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DailyLimerickButton from "./DailyLimerickButton";

test("renders DailyLimerickButton", () => {
  render(
    <Router>
      <DailyLimerickButton />
    </Router>
  );
  const buttonText = screen.queryByText(/Daily Limerick/);
  expect(buttonText).not.toBeNull();
});
