import React from "react";
import QuipPopup from "./QuipPopup";

export default {
  title: "General/QuipPopup",
  component: QuipPopup,
  argTypes: {},
};

const Template = (args) => <QuipPopup {...args} />;

export const Default = Template.bind({});
Default.args = {};
