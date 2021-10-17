import { render } from "@testing-library/react";
import Lighthouse from "./Lighthouse";

describe("renders Lighthouse", () => {
  test("renders base component", () => {
    render(<Lighthouse />);
  });
});
