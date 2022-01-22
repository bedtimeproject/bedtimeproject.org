import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";

import ConstructionComponent from "./Construction";

function Construction(props) {
  return (
    <HelmetProvider>
      <ConstructionComponent {...props} />
    </HelmetProvider>
  )
}

describe("renders Construction", () => {
  test("renders base component", () => {
    render(<Construction />);
  });
});
