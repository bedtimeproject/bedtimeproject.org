import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../../Jest/MockRouter";

import StoryComponent from "./Story";

function Story(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <StoryComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/Read/Stories/Story",
  component: Story,
  argTypes: {},
};

const Template = (args) => <Story {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {};
