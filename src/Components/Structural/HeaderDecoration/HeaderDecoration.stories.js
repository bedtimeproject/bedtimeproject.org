import React from "react";
import HeaderDecoration from "./HeaderDecoration";

export default {
  title: "Structural/HeaderDecoration",
  component: HeaderDecoration,
  argTypes: {},
};

const Template = (args) => <HeaderDecoration {...args} />;

export const Default = Template.bind({});
Default.args = {};
