import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../Jest/MockRouter";

import AcknowledgementsComponent from "./Acknowledgements";

function Acknowledgements(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <AcknowledgementsComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/About/Acknowledgements",
  component: Acknowledgements,
  argTypes: {},
};

const Template = (args) => <Acknowledgements {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
