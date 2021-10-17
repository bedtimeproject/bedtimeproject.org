import React from "react";
import RainyWindow from "./RainyWindow";

export default {
  title: "Components/General/RainyWindow",
  component: RainyWindow,
  argTypes: {},
};

const Template = (args) => <RainyWindow {...args} />;

export const Default = Template.bind({});
Default.args = {};
