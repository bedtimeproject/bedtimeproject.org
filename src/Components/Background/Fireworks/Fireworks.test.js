import { render } from "@testing-library/react";
import Fireworks from "./Fireworks";

describe("renders Fireworks", () => {
  test("renders base component", () => {
    render(<Fireworks />);
  });
});
