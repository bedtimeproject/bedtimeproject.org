import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../Jest/MockRouter";

import LicensesComponent from "./Licenses";

function Licenses(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <LicensesComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/About/Licenses",
  component: Licenses,
  argTypes: {},
};

const Template = (args) => <Licenses {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
