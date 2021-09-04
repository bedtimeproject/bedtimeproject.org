import React from "react";

import Crossword from "./Crossword";

export default {
  title: "Pages/Crossword",
  component: Crossword,
  argTypes: {},
};

const Template = (args) => <Crossword {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
