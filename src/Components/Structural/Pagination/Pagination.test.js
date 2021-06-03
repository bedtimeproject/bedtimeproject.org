import Pagination from "./Pagination";
import { render, screen } from "@testing-library/react";

describe("renders correct pagination elements", () => {
  test("one", () => {
    render(<Pagination pageCount={1} />);
    const one = screen.queryByText("1");
    expect(one).not.toBeNull();
  });
  test("two", () => {
    render(<Pagination pageCount={2} />);
    const two = screen.queryByText("2");
    expect(two).not.toBeNull();
  });
});

describe("renders previous and next labels", () => {
  test("previous", () => {
    render(<Pagination pageCount={1} />);
    const previous = screen.queryByText("< previous");
    expect(previous).not.toBeNull();
  });
  test("next", () => {
    render(<Pagination pageCount={1} />);
    const next = screen.queryByText("next >");
    expect(next).not.toBeNull();
  });
});
