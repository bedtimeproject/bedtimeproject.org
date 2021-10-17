import React from "react";
import BedtimeStories from "./BedtimeStories";

export default {
  title: "Pages/Read/BedtimeStories",
  component: BedtimeStories,
  argTypes: {},
};

const Template = (args) => <BedtimeStories {...args} />;

export const Default = Template.bind({});
Default.args = {};
