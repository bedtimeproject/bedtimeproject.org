import React from "react";
import ChessBoardSquare from "./ChessBoardSquare";

export default {
  title: "Components/General/ChessBoard/ChessBoardSquare",
  component: ChessBoardSquare,
  argTypes: {},
};

const Template = (args) => <ChessBoardSquare {...args} />;

export const Default = Template.bind({});
Default.args = {};
