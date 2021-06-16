import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import QuipButton from "./QuipButton";

export default {
  title: "Buttons/Quip Button",
  component: QuipButton,
  argTypes: {},
};

const Template = (args) => (
  <Router>
    <QuipButton {...args} link="/" />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Quip Button!",
};
