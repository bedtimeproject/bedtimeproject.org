import React from "react";
import { MockRouter } from "../../../Jest/MockRouter";

import FooterComponent from "./Footer";

function Footer(props) {
  return (
    <MockRouter>
      <FooterComponent {...props} />
    </MockRouter>
  )
}

export default {
  title: "Structural/Footer",
  component: Footer,
  argTypes: {},
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
