import { render } from "@testing-library/react";
import CenteredTitle from "./CenteredTitle";

test("renders CenteredTitle", () => {
  render(<CenteredTitle background={"#FFFFFF"} />);
});
