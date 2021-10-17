import React from "react";
import Tale from "./Tale";

export default {
  title: "Pages/Read/Tales/Tale",
  component: Tale,
  argTypes: {},
};

const Template = (args) => <Tale {...args} />;

export const Default = Template.bind({});
Default.args = {};
