import { render } from "@testing-library/react";
import Bookshelf from "./Bookshelf";

describe("renders Bookshelf", () => {
  test("renders base component", () => {
    render(<Bookshelf />);
  });
});
