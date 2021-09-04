import React from "react";
import StoryRouter from "storybook-react-router";

import Home from "./Home";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {},
  decorators: [StoryRouter()],
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
