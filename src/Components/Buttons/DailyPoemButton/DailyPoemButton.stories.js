import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import DailyPoemButton from "./DailyPoemButton";

export default {
  title: "Buttons/Daily Poem Button",
  component: DailyPoemButton,
  argTypes: {},
};

const Template = (args) => (
  <Router>
    <div
      style={{
        position: "relative",
        width: 150,
        height: 150,
      }}
    >
      <DailyPoemButton {...args} link="/" />
    </div>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Story Button!",
};
