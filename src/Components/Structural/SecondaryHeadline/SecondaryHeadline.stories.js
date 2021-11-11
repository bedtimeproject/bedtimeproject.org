import React from "react";
import SecondaryHeadline from "./SecondaryHeadline";

export default {
  title: "Components/Structural/SecondaryHeadline",
  component: SecondaryHeadline,
  argTypes: {},
};

const Template = (args) => <SecondaryHeadline {...args} />;

export const Default = Template.bind({});
Default.args = {};
