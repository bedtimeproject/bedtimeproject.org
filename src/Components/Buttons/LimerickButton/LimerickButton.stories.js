import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import LimerickButton from "./LimerickButton";

export default {
  title: "Buttons/Limerick Button",
  component: LimerickButton,
  argTypes: {},
};

const Template = (args) => (
  <Router>
    <LimerickButton {...args} link="/" />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Limerick Button!",
};
