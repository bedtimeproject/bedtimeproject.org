import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../../Jest/MockRouter";
import MrsBlueSkyComponent from "./MrsBlueSky";

function MrsBlueSky(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <MrsBlueSkyComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  );
}

test("renders MrsBlueSky", () => {
  render(<MrsBlueSky />);
});
