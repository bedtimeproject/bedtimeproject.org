import { render } from "@testing-library/react";
import { MockRouter } from "../../../../Jest/MockRouter";
import { HelmetProvider } from "react-helmet-async";
import TaleComponent from "./Tale";

function Tale(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <TaleComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  );
}

describe("renders Tale", () => {
  test("renders base component", () => {
    render(<Tale />);
  });
});
