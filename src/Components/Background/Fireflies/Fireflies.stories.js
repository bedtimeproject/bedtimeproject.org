import React from "react";

import Fireflies from "./Fireflies";

export default {
  title: "Background/Fireflies",
  component: Fireflies,
  argTypes: {},
};

const Template = (args) => <Fireflies {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
  // disables Chromatic's snapshotting on a story level
  chromatic: { disableSnapshot: true },
};
