import React from "react";

import ChessBoard from "./ChessBoard";

export default {
  title: "General/ChessBoard",
  component: ChessBoard,
  argTypes: {},
};

const Template = (args) => <ChessBoard {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
