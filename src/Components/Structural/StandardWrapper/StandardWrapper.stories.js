import React from "react";
import StandardWrapper from "./StandardWrapper";

export default {
  title: "Components/Structural/StandardWrapper",
  component: StandardWrapper,
  argTypes: {},
};

const Template = (args) => <StandardWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {};
