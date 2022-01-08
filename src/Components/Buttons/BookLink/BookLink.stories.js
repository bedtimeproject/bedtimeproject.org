import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import BookLinkComponent from "./BookLink";

const BookLink = (props) => (
  <Router>
    <BookLinkComponent link="#" {...props} />
  </Router>
);

export default {
  title: "Buttons/BookLink",
  component: BookLink,
  argTypes: {
    author: {
      name: "Author",
      control: { type: "text" },
    },
    title: {
      name: "Title",
      control: { type: "text" },
    },
    backgroundColor: {
      name: "Background Color",
      control: { type: "color" },
    },
  },
};

const Template = (args) => (
  <BookLink
    link="#"
    story={{ title: args.title, field_author: args.author }}
    backgroundColor={args.backgroundColor}
  />
);

export const Default = Template.bind({});
Default.args = {
  author: "Captain C.A. Moonbloom",
  title: "Mrs. Blue Sky",
  backgroundColor: undefined,
};
export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  author: "Captain C.A. Moonbloom",
  title: "Mrs. Blue Sky",
  backgroundColor: "#133061",
};
