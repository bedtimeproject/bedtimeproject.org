import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PlayButton from "./PlayButton";

test("renders PlayButton", () => {
  render(
    <Router>
      <PlayButton link="/">Hello</PlayButton>
    </Router>
  );
  const label = screen.queryByText(/Hello/);
  expect(label).not.toBeNull();
});
