import React from "react";
import Construction from "./Construction";

export default {
  title: "Pages/Construction",
  component: Construction,
  argTypes: {},
};

const Template = (args) => <Construction {...args} />;

export const Default = Template.bind({});
Default.args = {};
