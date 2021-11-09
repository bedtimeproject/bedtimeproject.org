import React from "react";
import CreatePWA from "./CreatePWA";

export default {
  title: "Pages/Parents/CreatePWA",
  component: CreatePWA,
  argTypes: {},
};

const Template = (args) => <CreatePWA {...args} />;

export const Default = Template.bind({});
Default.args = {};
