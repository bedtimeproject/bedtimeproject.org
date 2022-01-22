import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../../Jest/MockRouter";

import StoryComponent from "./Story";

function Story(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <StoryComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  );
}

describe("renders Story", () => {
  test("renders base component", () => {
    render(<Story />);
  });
});
