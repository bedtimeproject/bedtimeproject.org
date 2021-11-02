import React from "react";
import Drawers from "./Drawers";

export default {
  title: "Components/General/Bookshelf/Drawers",
  component: Drawers,
  argTypes: {},
};

const Template = (args) => <Drawers {...args} />;

export const Default = Template.bind({});
Default.args = {};
