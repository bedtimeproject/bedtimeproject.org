import { render } from "@testing-library/react";
import DefaultTitle from "./DefaultTitle";

test("renders DefaultTitle", () => {
  render(<DefaultTitle background={"#FFFFFF"} />);
});
