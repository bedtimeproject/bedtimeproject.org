import React from "react";
import StoryRouter from "storybook-react-router";

import Play from "./Play";

export default {
  title: "Pages/Play",
  component: Play,
  argTypes: {},
  decorators: [StoryRouter({}, { initialEntries: ["/play"] })],
};

const Template = (args) => <Play {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
