import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../Jest/MockRouter";

import TalesComponent from "./Tales";

function Tales(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <TalesComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  );
}

test("renders Tales", () => {
  render(<Tales />);
});
