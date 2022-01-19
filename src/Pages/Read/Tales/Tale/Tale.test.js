import { render } from "@testing-library/react";
import { MockRouter } from "../../../../Jest/MockRouter";
import TaleComponent from "./Tale";

function Tale(props) {
  return (
    <MockRouter>
      <TaleComponent {...props} />
    </MockRouter>
  );
}

describe("renders Tale", () => {
  test("renders base component", () => {
    render(<Tale />);
  });
});
