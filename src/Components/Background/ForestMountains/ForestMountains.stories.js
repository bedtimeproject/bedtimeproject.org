import React from "react";

import ForestMountains from "./ForestMountains";

export default {
  title: "Background/Forest Mountains",
  component: ForestMountains,
  argTypes: {
    timeOfDay: {
      name: "Time of Day",
      options: [undefined, "day", "night"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
  },
};

const Template = (args) => <ForestMountains {...args} />;

export const Dynamic = Template.bind({});
Dynamic.args = {};

export const Day = Template.bind({});
Day.args = {
  timeOfDay: "day",
};

export const Night = Template.bind({});
Night.args = {
  timeOfDay: "night",
};
