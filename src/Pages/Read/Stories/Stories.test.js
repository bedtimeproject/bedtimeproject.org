import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../Jest/MockRouter";

import StoriesComponent from "./Stories";

function Stories(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <StoriesComponent />
      </MockRouter>
    </HelmetProvider>
  );
}

test("renders Stories", () => {
  render(<Stories />);
});
