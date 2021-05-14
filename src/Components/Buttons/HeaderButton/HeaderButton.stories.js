import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import HeaderButton from "./HeaderButton";

export default {
  title: "Buttons/Header Button",
  component: HeaderButton,
  argTypes: {},
};

const Template = (args) => (
  <Router>
    <HeaderButton {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Header Button!",
  link: "/",
};
