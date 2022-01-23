import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../Jest/MockRouter";

import StoriesComponent from "./Stories";

function Stories(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <StoriesComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/Read/Stories",
  component: Stories,
  argTypes: {},
};

const Template = (args) => <Stories {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
