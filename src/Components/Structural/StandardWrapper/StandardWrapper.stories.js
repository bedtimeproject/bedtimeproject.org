import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../Jest/MockRouter";

import StandardWrapperComponent from "./StandardWrapper";

function StandardWrapper(props){
  return (
    <HelmetProvider>
      <MockRouter>
        <StandardWrapperComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Structural/StandardWrapper",
  component: StandardWrapper,
  argTypes: {},
};

const Template = (args) => <StandardWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {};
