import React from "react";

import Title from "./DefaultTitle";

export default {
  title: "Scroll Animation/Default Title",
  component: Title,
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
  <Title background={args.background} author={args.author}>
    {args.title}
  </Title>
);

export const Default = Template.bind({});
Default.args = {
  title: "The Guide To Sunset",
  author: "FostyWally",
  background: "#8bc9e4",
};
