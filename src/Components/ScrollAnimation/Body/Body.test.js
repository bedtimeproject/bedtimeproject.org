import { render } from "@testing-library/react";
import Body from "./Body";

import { testStory } from "../testStory";

test("renders Body", () => {
  render(<Body story={testStory} />);
});
