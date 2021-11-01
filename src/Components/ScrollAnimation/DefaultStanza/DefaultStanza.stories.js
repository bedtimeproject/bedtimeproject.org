import React from "react";

import Stanza from "./DefaultStanza";

export default {
  title: "Scroll Animation/Default Stanza",
  component: Stanza,
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
    thirdLine: {
      name: "Third Line",
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
  <Stanza background={args.background}>
    {args.firstLine && <p>{args.firstLine}</p>}
    {args.secondLine && <p>{args.secondLine}</p>}
    {args.thirdLine && <p>{args.thirdLine}</p>}
  </Stanza>
);

export const Default = Template.bind({});
Default.args = {
  firstLine: "You can taste the last bit of the sun as it goes",
  secondLine: "They say all the red makes it taste like a rose.",
  thirdLine: "See if you smell it someday with your nose.",
  background: "#8bc9e4",
};
