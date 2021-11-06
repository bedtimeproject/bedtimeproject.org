import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("renders Loading", () => {
  test("renders base component", () => {
    render(<Loading />);
  });
});
