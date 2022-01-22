import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";

import SEOComponent from "./SEO";

function SEO(props) {
  return (
    <HelmetProvider>
      <SEOComponent {...props} />
    </HelmetProvider>
  );
}

describe("renders SEO", () => {
  test("renders base component", () => {
    render(<SEO />);
  });
});
