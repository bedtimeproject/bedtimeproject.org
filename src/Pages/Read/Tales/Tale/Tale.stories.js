import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../../Jest/MockRouter";

import TaleComponent from "./Tale";

function Tale(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <TaleComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/Read/Tales/Tale",
  component: Tale,
  argTypes: {},
};

const Template = (args) => <Tale {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {};
