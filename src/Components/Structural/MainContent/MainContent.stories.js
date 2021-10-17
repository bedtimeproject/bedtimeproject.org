import React from "react";
import MainContent from "./MainContent";

export default {
  title: "Components/Structural/MainContent",
  component: MainContent,
  argTypes: {},
};

const Template = (args) => <MainContent {...args} />;

export const Default = Template.bind({});
Default.args = {};
