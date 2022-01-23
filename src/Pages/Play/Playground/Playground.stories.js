import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../Jest/MockRouter";

import PlaygroundComponent from "./Playground";

function Playground(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <PlaygroundComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/Play/Playground",
  component: Playground,
  argTypes: {},
};

const Template = (args) => <Playground {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
