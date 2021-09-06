import { render } from "@testing-library/react";
import DefaultStanza from "./DefaultStanza";

test("renders DefaultStanza", () => {
  render(<DefaultStanza background={"#FFFFFF"} />);
});
