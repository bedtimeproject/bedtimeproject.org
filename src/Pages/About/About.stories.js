import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../Jest/MockRouter";

import AboutComponent from "./About";

function About(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <AboutComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/About",
  component: About,
  argTypes: {},
};

const Template = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
