import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Checkerboard from "./Checkerboard";

export default {
  title: "Background/Checkerboard",
  component: Checkerboard,
  argTypes: {
    primaryColor: {
      name: "Primary Color",
      control: {
        type: "color",
      },
    },
    secondaryColor: {
      name: "Secondary Color",
      control: {
        type: "color",
      },
    },
  },
};

const Template = (args) => (
  <Router>
    <Checkerboard {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  primaryColor: "red",
  secondaryColor: "black",
};
