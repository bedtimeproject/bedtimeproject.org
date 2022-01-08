import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Waves from "./Waves";

export default {
  title: "Background/Waves",
  component: Waves,
  argTypes: {
    color: {
      name: 'Color',
      control: {
        type: 'color',
      },
    },
  },
};

const Template = (args) => (
  <Router>
    <Waves {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  color: "#625ace",
};
