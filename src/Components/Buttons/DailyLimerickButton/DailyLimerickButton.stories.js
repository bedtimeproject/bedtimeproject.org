import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import DailyLimerickButton from "./DailyLimerickButton";

export default {
  title: "Buttons/Daily Limerick Button",
  component: DailyLimerickButton,
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
      <DailyLimerickButton {...args} link="/" />
    </div>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Story Button!",
};
