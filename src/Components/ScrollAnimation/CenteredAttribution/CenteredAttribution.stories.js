import React from "react";

import CenteredAttribution from "./CenteredAttribution";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Scroll Animation/Centered Attribution",
  component: CenteredAttribution,
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
    <CenteredAttribution
      background={args.background}
      linkback={"/poems/tales/"}
    >
      <p>{args.firstLine}</p>
      <p>{args.secondLine}</p>
    </CenteredAttribution>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  firstLine: "Written by FostyWally",
  secondLine: "Animated by Captain Code",
  background: "#8bc9e4",
};
