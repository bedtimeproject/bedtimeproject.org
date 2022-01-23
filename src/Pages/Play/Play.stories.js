import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../Jest/MockRouter";

import PlayComponent from "./Play";

function Play(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <PlayComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/Play",
  component: Play,
  argTypes: {},
};

const Template = (args) => <Play {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
