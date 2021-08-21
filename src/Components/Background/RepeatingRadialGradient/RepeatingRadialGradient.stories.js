import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import RepeatingRadialGradient from "./RepeatingRadialGradient";

export default {
  title: "Background/Repeating Radial Gradient",
  component: RepeatingRadialGradient,
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
    tertiaryColor: {
      name: "Tertiary Color",
      control: {
        type: "color",
      },
    },
  },
};

const Template = (args) => (
  <Router>
    <RepeatingRadialGradient {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  primaryColor: "#f3f6f6",
  secondaryColor: "#56d1b3",
  tertiaryColor: "#56d1b3",
};
