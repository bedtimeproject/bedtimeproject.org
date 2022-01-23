import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../Jest/MockRouter";

import ReadComponent from "./Read";

function Read(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <ReadComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/Read",
  component: Read,
  argTypes: {},
};

const Template = (args) => <Read {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
