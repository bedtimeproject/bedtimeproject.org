import React from "react";

import Title from "./Title";

export default {
  title: "Scroll Animation/Title",
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
  author: "Daniel Stigmon",
  background: "#8bc9e4",
};
