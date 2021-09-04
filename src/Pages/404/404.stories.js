import React from "react";

import FourOhFour from "./404";

export default {
  title: "Pages/404",
  component: FourOhFour,
  argTypes: {},
};

const Template = (args) => <FourOhFour {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
