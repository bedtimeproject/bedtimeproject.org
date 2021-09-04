import { render, screen } from "@testing-library/react";
import HeaderDescription from "./HeaderDescription";

test("renders HeaderDescription", () => {
  render(<HeaderDescription />);
});

describe("renders HeaderDescription pieces", () => {
  test("renders name", () => {
    const name = "John Doe";
    render(<HeaderDescription name={name} />);
    const nameExists = screen.queryByText(name);
    expect(nameExists).toBeTruthy();
  });

  test("renders contribution", () => {
    const contribution = "Great cool things that this person did";
    render(<HeaderDescription contribution={contribution} />);
    const contributionExists = screen.queryByText(contribution);
    expect(contributionExists).toBeTruthy();
  });
});
