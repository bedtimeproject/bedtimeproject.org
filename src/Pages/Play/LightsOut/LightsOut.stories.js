import React from "react";

import LightsOut from "./LightsOut";

export default {
  title: "Pages/LightsOut",
  component: LightsOut,
  argTypes: {},
};

const Template = (args) => <LightsOut {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
