import React from "react";
import Lanterns from "./Lanterns";

export default {
  title: "Components/Structural/HeaderDecoration/Lanterns",
  component: Lanterns,
  argTypes: {},
};

const Template = (args) => <Lanterns {...args} />;

export const Default = Template.bind({});
Default.args = {};
