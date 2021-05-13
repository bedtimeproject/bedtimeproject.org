import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import LimerickButton from "./LimerickButton";

export default {
  title: "Global/Buttons/Limerick Button",
  component: LimerickButton,
  argTypes: {},
};

const Template = (args) => (
  <Router>
    <LimerickButton {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Limerick Button!",
  link: "/",
};
