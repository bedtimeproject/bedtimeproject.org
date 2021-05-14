import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PageTitle from "./PageTitle";

export default {
  title: "Structural/Page Title",
  component: PageTitle,
  argTypes: {},
};

const Template = (args) => (
  <Router>
    <PageTitle {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Page Heading!",
  link: "/",
};
