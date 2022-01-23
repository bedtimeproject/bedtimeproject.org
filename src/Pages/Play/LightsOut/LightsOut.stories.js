import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../Jest/MockRouter";

import LightsOutComponent from "./LightsOut";

function LightsOut(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <LightsOutComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/Play/LightsOut",
  component: LightsOut,
  argTypes: {},
};

const Template = (args) => <LightsOut {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
