import React from "react";
import ChristmasLights from "./ChristmasLights";

export default {
  title: "Structural/HeaderDecoration/ChristmasLights",
  component: ChristmasLights,
  argTypes: {},
};

const Template = (args) => <ChristmasLights {...args} />;

export const Default = Template.bind({});
Default.args = {};
