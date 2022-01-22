import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../../Jest/MockRouter";

import TheGuideToSunsetComponent from "./TheGuideToSunset";

function TheGuideToSunset(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <TheGuideToSunsetComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  );
}

test("renders TheGuideToSunset", () => {
  render(<TheGuideToSunset />);
});
