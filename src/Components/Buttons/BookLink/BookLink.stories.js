import React from "react";
import BookLink from "./BookLink";

export default {
  title: "Buttons/BookLink",
  component: BookLink,
  argTypes: {},
};

const Template = (args) => <BookLink {...args} />;

export const Default = Template.bind({});
Default.args = {};
