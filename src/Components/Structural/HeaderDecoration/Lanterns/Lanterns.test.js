import { render } from "@testing-library/react";
import Lanterns from "./Lanterns";

describe("renders Lanterns", () => {
  test("renders base component", () => {
    render(<Lanterns />);
  });
});
