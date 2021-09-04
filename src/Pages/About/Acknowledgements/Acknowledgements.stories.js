import React from "react";

import Acknowledgements from "./Acknowledgements";

export default {
  title: "Pages/Acknowledgements",
  component: Acknowledgements,
  argTypes: {},
};

const Template = (args) => <Acknowledgements {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
