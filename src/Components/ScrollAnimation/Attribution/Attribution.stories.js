import React from "react";

import Attribution from "./Attribution";

export default {
  title: "Scroll Animation/Attribution",
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
  <Attribution background={args.background}>
    <p>{args.firstLine}</p>
    <p>{args.secondLine}</p>
  </Attribution>
);

export const Default = Template.bind({});
Default.args = {
  firstLine: "Written by Daniel Stigmon",
  secondLine: "Animated by Alexander Burdiss",
  background: "#8bc9e4",
};
