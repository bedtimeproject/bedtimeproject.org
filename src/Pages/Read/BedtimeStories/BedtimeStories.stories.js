import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../Jest/MockRouter";

import BedtimeStoriesComponent from "./BedtimeStories";

function BedtimeStories(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <BedtimeStoriesComponent />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/Read/BedtimeStories",
  component: BedtimeStories,
  argTypes: {},
};

const Template = (args) => <BedtimeStories {...args} />;

export const Default = Template.bind({});
Default.args = {};
