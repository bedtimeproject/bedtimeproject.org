import { render, screen } from "@testing-library/react";
import PageTitle from "./PageTitle";

test("renders PageTitle", () => {
  render(<PageTitle />);
});

test("PageTitle shows appropriate title", () => {
  const testText = "Hello, World!";
  render(<PageTitle>{testText}</PageTitle>);
  const textExists = screen.queryByText(testText);
  expect(textExists).toBeTruthy();
});
