import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import BookLinkComponent from "./BookLink";

const BookLink = (props) => (
  <Router>
    <BookLinkComponent link="#" {...props} />
  </Router>
);

describe("renders BookLink", () => {
  test("renders base component", () => {
    render(<BookLink />);
  });

  test("renders title", () => {
    const testTitle = "A new story";
    render(<BookLink story={{ title: testTitle }} />);
    const titleExists = screen.queryByText(testTitle);
    expect(titleExists).toBeTruthy();
  });

  test("renders author", () => {
    const testAuthor = "John Locke";
    render(<BookLink story={{ author: testAuthor }} />);
    const authorExists = screen.queryByText(testAuthor);
    expect(authorExists).toBeTruthy();
  });

  test("renders background color", () => {
    const testColor = "rgb(12, 12, 12)";
    const { container } = render(<BookLink backgroundColor={testColor} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild.style.backgroundColor).toEqual(testColor);
  });
});
