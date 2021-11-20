import React from "react";
import SecondaryHeadline from "./SecondaryHeadline";

export default {
  title: "Structural/SecondaryHeadline",
  component: SecondaryHeadline,
  argTypes: {},
};

const Template = (args) => <SecondaryHeadline {...args} />;

export const Default = Template.bind({});
Default.args = {};
