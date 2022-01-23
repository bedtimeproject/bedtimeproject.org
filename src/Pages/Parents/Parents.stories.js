import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../Jest/MockRouter";

import ParentsComponent from "./Parents";

function Parents(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <ParentsComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/Read/Parents",
  component: Parents,
  argTypes: {},
};

const Template = (args) => <Parents {...args} />;

export const Default = Template.bind({});
Default.args = {};
