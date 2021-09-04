import React from "react";
import StoryRouter from "storybook-react-router";

import About from "./About";

export default {
  title: "Pages/About",
  component: About,
  argTypes: {},
  decorators: [StoryRouter({}, { initialEntries: ["/about"] })],
};

const Template = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
