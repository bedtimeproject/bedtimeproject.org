import React from "react";

import Playground from "./Playground";

export default {
  title: "Pages/Playground",
  component: Playground,
  argTypes: {},
};

const Template = (args) => <Playground {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
