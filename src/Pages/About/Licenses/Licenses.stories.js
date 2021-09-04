import React from "react";

import Licenses from "./Licenses";

export default {
  title: "Pages/Licenses",
  component: Licenses,
  argTypes: {},
};

const Template = (args) => <Licenses {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
