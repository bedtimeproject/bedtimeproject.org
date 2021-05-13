import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders project header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Bedtime Project/i);
  expect(linkElement).toBeInTheDocument();
});
