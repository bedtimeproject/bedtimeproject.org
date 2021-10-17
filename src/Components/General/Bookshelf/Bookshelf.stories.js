import React from "react";
import Bookshelf from "./Bookshelf";

export default {
  title: "Components/General/Bookshelf",
  component: Bookshelf,
  argTypes: {},
};

const Template = (args) => <Bookshelf {...args} />;

export const Default = Template.bind({});
Default.args = {};
