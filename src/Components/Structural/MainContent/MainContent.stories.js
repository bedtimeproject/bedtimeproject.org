import React from "react";
import MainContent from "./MainContent";

export default {
  title: "Structural/MainContent",
  component: MainContent,
  argTypes: {},
};

const Template = (args) => <MainContent {...args} />;

export const Default = Template.bind({});
Default.args = {};
