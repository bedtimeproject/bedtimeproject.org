import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DoorButtonComponent from "./DoorButton";

function DoorButton(props) {
  return (
    <Router>
      <DoorButtonComponent {...props} />
    </Router>
  );
}

test("renders DoorButton", () => {
  const testText = "Story";
  render(<DoorButton link="/" label={testText} />);
  const buttonText = screen.queryByText(testText);
  expect(buttonText).not.toBeNull();
});
