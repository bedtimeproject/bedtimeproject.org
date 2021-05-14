import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import StoryButton from "./StoryButton";

export default {
  title: "Buttons/Story Button",
  component: StoryButton,
  argTypes: {},
};

const Template = (args) => (
  <Router>
    <StoryButton {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Story Button!",
  link: "/",
};
