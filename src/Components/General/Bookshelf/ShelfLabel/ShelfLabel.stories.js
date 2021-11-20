import React from "react";
import ShelfLabel from "./ShelfLabel";

export default {
  title: "General/Bookshelf/ShelfLabel",
  component: ShelfLabel,
  argTypes: {},
};

const Template = (args) => <ShelfLabel {...args} />;

export const Default = Template.bind({});
Default.args = {};
