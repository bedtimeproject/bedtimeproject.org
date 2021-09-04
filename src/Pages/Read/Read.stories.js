import React from "react";
import StoryRouter from "storybook-react-router";

import Read from "./Read";

export default {
  title: "Pages/Read",
  component: Read,
  argTypes: {},
  decorators: [StoryRouter({}, { initialEntries: ["/read"] })],
};

const Template = (args) => <Read {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
