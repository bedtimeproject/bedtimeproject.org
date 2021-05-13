import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderButton from "./HeaderButton";

test("renders HeaderButton", () => {
  render(
    <Router>
      <HeaderButton link="/">Home</HeaderButton>
    </Router>
  );
  const buttonText = screen.queryByText(/Home/);
  expect(buttonText).not.toBeNull();
});
