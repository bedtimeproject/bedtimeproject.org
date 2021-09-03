import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DoorButton from "./DoorButton";

test("renders DoorButton", () => {
  const testText = "Story";
  render(
    <Router>
      <DoorButton link="/" label={testText} />
    </Router>
  );
  const buttonText = screen.queryByText(testText);
  expect(buttonText).not.toBeNull();
});
