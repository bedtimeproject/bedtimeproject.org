import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../Jest/MockRouter";

import TalesComponent from "./Tales";

function Tales(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <TalesComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  );
}

export default {
  title: "Pages/Read/Tales",
  component: Tales,
  argTypes: {},
};

const Template = (args) => <Tales {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
