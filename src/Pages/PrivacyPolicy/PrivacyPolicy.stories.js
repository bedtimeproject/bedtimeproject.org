import React from "react";
import PrivacyPolicy from "./PrivacyPolicy";

export default {
  title: "Pages/PrivacyPolicy",
  component: PrivacyPolicy,
  argTypes: {},
};

const Template = (args) => <PrivacyPolicy {...args} />;

export const Default = Template.bind({});
Default.args = {};
