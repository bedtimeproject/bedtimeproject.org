import { L } from "caniuse-lite/data/agents";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../Jest/MockRouter";

import ConstructionComponent from "./Construction";

function Construction(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <ConstructionComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/Construction",
  component: Construction,
  argTypes: {},
};

const Template = (args) => <Construction {...args} />;

export const Default = Template.bind({});
Default.args = {};
