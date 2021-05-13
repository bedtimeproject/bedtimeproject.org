import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import RotatingCubes from "./RotatingCubes";

export default {
  title: "Global/Background/Rotating Cubes",
  component: RotatingCubes,
};

const Template = (args) => (
  <Router>
    <RotatingCubes {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {};
