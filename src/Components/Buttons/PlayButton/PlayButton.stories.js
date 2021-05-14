import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PlayButton from "./PlayButton";

export default {
  title: "Buttons/Play Button",
  component: PlayButton,
  argTypes: {},
};

const Template = (args) => (
  <Router>
    <PlayButton {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Play Button!",
  link: "/",
};
