import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../Jest/MockRouter";

import PrivacyPolicyComponent from "./PrivacyPolicy";

function PrivacyPolicy(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <PrivacyPolicyComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/PrivacyPolicy",
  component: PrivacyPolicy,
  argTypes: {},
};

const Template = (args) => <PrivacyPolicy {...args} />;

export const Default = Template.bind({});
Default.args = {};
