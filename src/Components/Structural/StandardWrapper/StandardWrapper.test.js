import { render } from "@testing-library/react";
import StandardWrapper from "./StandardWrapper";

describe("renders StandardWrapper", () => {
  test("renders base component", () => {
    render(<StandardWrapper />);
  });
});
