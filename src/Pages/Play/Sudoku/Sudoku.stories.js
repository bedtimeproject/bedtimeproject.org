import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../Jest/MockRouter";

import SudokuComponent from "./Sudoku";

function Sudoku(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <SudokuComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/Play/Sudoku",
  component: Sudoku,
  argTypes: {},
};

const Template = (args) => <Sudoku {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
