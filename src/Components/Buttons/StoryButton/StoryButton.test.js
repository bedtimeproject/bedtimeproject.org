import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import StoryButton from "./StoryButton";

test("renders StoryButton", () => {
  render(
    <Router>
      <StoryButton link="/">Story</StoryButton>
    </Router>
  );
  const buttonText = screen.queryByText(/Story/);
  expect(buttonText).not.toBeNull();
});
