import { render } from "@testing-library/react";
import Story from "./Story";

describe("renders Story", () => {
  test("renders base component", () => {
    render(<Story />);
  });
});
