import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DailyPoemButton from "./DailyPoemButton";

test("renders DailyPoemButton", () => {
  render(
    <Router>
      <DailyPoemButton />
    </Router>
  );
  const buttonText = screen.queryByText(/Daily Poem/);
  expect(buttonText).not.toBeNull();
});
