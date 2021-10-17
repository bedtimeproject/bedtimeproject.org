import React from "react";
import Story from "./Story";

export default {
  title: "Pages/Read/Stories/Story",
  component: Story,
  argTypes: {},
};

const Template = (args) => <Story {...args} />;

export const Default = Template.bind({});
Default.args = {};
