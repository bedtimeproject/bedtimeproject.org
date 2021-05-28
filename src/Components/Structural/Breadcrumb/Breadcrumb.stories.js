import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Breadcrumb from "./Breadcrumb";

export default {
  title: "Structural/Breadcrumb",
  component: Breadcrumb,
  argTypes: {},
};

const Template = (args) => (
  <Router>
    <Breadcrumb {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Breadcrumb",
  link: "/",
};
