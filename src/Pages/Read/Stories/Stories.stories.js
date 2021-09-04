import React from "react";
import StoryRouter from "storybook-react-router";

import Stories from "./Stories";

export default {
  title: "Pages/Stories",
  component: Stories,
  argTypes: {},
  decorators: [StoryRouter({}, { initialEntries: ["/read/stories"] })],
};

const Template = (args) => <Stories {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
