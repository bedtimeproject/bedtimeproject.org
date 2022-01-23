import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../Jest/MockRouter";

import FourOhFourComponent from "./404";

function FourOhFour(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <FourOhFourComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  );
}

export default {
  title: "Pages/404",
  component: FourOhFour,
  argTypes: {},
};

const Template = (args) => <FourOhFour {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
