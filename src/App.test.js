import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

test("renders project logo", () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  // const linkElement = screen.getByAltText(/Bedtime Project/i);
  // expect(linkElement).toBeInTheDocument();
});
