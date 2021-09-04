import React from "react";
import StoryRouter from "storybook-react-router";

import Tales from "./Tales";

export default {
  title: "Pages/Tales",
  component: Tales,
  argTypes: {},
  decorators: [StoryRouter({}, { initialEntries: ["/read/tales"] })],
};

const Template = (args) => <Tales {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
