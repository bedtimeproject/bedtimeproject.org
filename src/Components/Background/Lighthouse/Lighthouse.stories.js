import React from "react";
import Lighthouse from "./Lighthouse";

export default {
  title: "Background/Lighthouse",
  component: Lighthouse,
  argTypes: {},
};

const Template = (args) => <Lighthouse {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
