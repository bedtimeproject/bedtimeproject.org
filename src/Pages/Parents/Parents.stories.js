import React from "react";
import Parents from "./Parents";

export default {
  title: "Pages/Read/Parents",
  component: Parents,
  argTypes: {},
};

const Template = (args) => <Parents {...args} />;

export const Default = Template.bind({});
Default.args = {};
