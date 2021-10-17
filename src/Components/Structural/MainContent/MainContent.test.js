import { render } from "@testing-library/react";
import MainContent from "./MainContent";

describe("renders MainContent", () => {
  test("renders base component", () => {
    render(<MainContent />);
  });
});
