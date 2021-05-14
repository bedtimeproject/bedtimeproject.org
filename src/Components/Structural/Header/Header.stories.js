import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";

export default {
  title: "Structural/Header",
  component: Header,
  argTypes: {},
};

const Template = (args) => (
  <Router>
    <Header {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {};
