import React from "react";
import Fireworks from "./Fireworks";

export default {
  title: "Background/Fireworks",
  component: Fireworks,
  argTypes: {},
};

const Template = (args) => <Fireworks {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
  backgrounds: { default: "dark" },
  // disables Chromatic's snapshotting on a story level
  chromatic: { disableSnapshot: true },
};
