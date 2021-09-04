import React from "react";

import Sudoku from "./Sudoku";

export default {
  title: "Pages/Sudoku",
  component: Sudoku,
  argTypes: {},
};

const Template = (args) => <Sudoku {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
