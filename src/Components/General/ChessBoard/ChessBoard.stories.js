import React from "react";
import Chess from "chess.js";

import ChessBoard from "./ChessBoard";

export default {
  title: "General/ChessBoard",
  component: ChessBoard,
  argTypes: {},
};

const Template = (args) => {
  const board = new Chess();
  return <ChessBoard {...args} board={board.board()} />;
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
