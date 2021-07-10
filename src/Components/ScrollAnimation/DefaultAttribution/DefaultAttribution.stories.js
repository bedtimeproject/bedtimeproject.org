import React from "react";

import Attribution from "./DefaultAttribution";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Scroll Animation/Default Attribution",
  component: Attribution,
  argTypes: {
    firstLine: {
      name: "First Line",
      control: {
        type: "text",
      },
    },
    secondLine: {
      name: "Second Line",
      control: {
        type: "text",
      },
    },
    background: {
      name: "Background Color",
      control: {
        type: "color",
      },
    },
  },
};

const Template = (args) => (
  <Router>
    <Attribution background={args.background} linkback={"/poems/tales/"}>
      <p>{args.firstLine}</p>
      <p>{args.secondLine}</p>
    </Attribution>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  firstLine: "Written by FostyWally",
  secondLine: "Animated by Captain Code",
  background: "#8bc9e4",
};
