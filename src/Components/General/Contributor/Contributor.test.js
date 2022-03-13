import { render, screen } from "@testing-library/react";
import Contributor from "./Contributor";

test("renders Contributor", () => {
  render(<Contributor />);
});

describe("Contributor renders correct attributes", () => {
  test("Contributor shows appropriate name", () => {
    const testText = "Hello, World!";
    render(<Contributor name={testText} />);
    const textExists = screen.queryByText(testText);
    expect(textExists).toBeTruthy();
  });
});
