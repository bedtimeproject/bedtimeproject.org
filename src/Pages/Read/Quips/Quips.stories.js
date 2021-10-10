import React from "react";
import StoryRouter from "storybook-react-router";

import Quips from "./Quips";

export default {
  title: "Pages/Quips",
  component: Quips,
  argTypes: {},
  decorators: [StoryRouter({}, { initialEntries: ["/read/quips"] })],
};

const Template = (args) => <Quips {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Latest = Template.bind({});
Latest.args = {};
Latest.parameters = {
  controls: { hideNoControlsWarning: true },
};
Latest.decorators = [
  StoryRouter({}, { initialEntries: ["/read/quips/latest"] }),
];
