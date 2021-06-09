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
