import { render } from "@testing-library/react";
import BookLink from "./BookLink";

describe("renders BookLink", () => {
  test("renders base component", () => {
    render(<BookLink />);
  });
});
