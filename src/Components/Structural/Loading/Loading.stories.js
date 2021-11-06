import React from "react";
import Loading from "./Loading";

export default {
  title: "Components/Structural/Loading",
  component: Loading,
  argTypes: {},
};

const Template = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {};
