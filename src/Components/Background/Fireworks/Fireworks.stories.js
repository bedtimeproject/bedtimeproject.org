import React from "react";
import Fireworks from "./Fireworks";

export default {
  title: "Components/Background/Fireworks",
  component: Fireworks,
  argTypes: {},
};

const Template = (args) => <Fireworks {...args} />;

export const Default = Template.bind({});
Default.args = {};
