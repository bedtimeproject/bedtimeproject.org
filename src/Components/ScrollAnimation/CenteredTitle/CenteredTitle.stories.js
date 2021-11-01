import React from "react";

import CenteredTitle from "./CenteredTitle";

export default {
  title: "Scroll Animation/Centered Title",
  component: CenteredTitle,
  argTypes: {
    title: {
      name: "Title",
      control: {
        type: "text",
      },
    },
    author: {
      name: "Author",
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
  <CenteredTitle background={args.background} author={args.author}>
    {args.title}
  </CenteredTitle>
);

export const Default = Template.bind({});
Default.args = {
  title: "The Guide To Sunset",
  author: "FostyWally",
  background: "#8bc9e4",
};
