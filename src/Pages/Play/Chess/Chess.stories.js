import React from "react";

import Chess from "./Chess";

export default {
  title: "Pages/Chess",
  component: Chess,
  argTypes: {},
};

const Template = (args) => <Chess {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
