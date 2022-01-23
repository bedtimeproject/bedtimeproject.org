import React from "react";
import SecondaryHeadline from "./SecondaryHeadline";

export default {
  title: "Structural/SecondaryHeadline",
  component: SecondaryHeadline,
  argTypes: {
    children: {
      name: "Text",
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <SecondaryHeadline {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Secondary Headline!",
};
