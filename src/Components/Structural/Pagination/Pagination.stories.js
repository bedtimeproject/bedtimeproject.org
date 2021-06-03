import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Pagination from "./Pagination";

export default {
  title: "Structural/Pagination",
  component: Pagination,
  argTypes: {
    pageCount: {
      name: "Page Count",
      control: {
        type: "number",
      },
    },
  },
};

const Template = (args) => (
  <Router>
    <Pagination {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  pageCount: 5,
};
