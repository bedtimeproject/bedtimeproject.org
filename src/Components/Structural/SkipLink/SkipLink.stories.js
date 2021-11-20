import React from "react";
import SkipLink from "./SkipLink";

export default {
  title: "Structural/SkipLink",
  component: SkipLink,
  argTypes: {},
};

const Template = (args) => <SkipLink {...args} />;

export const Default = Template.bind({});
Default.args = {};
