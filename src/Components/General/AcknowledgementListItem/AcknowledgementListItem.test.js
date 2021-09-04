import { render, screen } from "@testing-library/react";
import AcknowledgementListItem from "./AcknowledgementListItem";

test("renders AcknowledgementListItem", () => {
  render(<AcknowledgementListItem />);
});

describe("renders AcknoweldgementListItem pieces", () => {
  test("renders name", () => {
    const name = "John Doe";
    render(<AcknowledgementListItem name={name} />);
    const nameExists = screen.queryByText(name);
    expect(nameExists).toBeTruthy();
  });

  test("renders contribution", () => {
    const contribution = "Great cool things that this person did";
    render(<AcknowledgementListItem contribution={contribution} />);
    const contributionExists = screen.queryByText(contribution);
    expect(contributionExists).toBeTruthy();
  });
});
