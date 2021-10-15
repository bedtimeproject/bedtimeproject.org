import { render } from "@testing-library/react";
import SEO from "./SEO";

describe("renders SEO", () => {
  test("renders base component", () => {
    render(<SEO />);
  });
});
