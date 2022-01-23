import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../../Jest/MockRouter";

import QuipsComponent from "./Quips";

function Quips(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <QuipsComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  );
}

export default {
  title: "Pages/Read/Quips",
  component: Quips,
  argTypes: {},
};

const Template = (args) => <Quips {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Latest = Template.bind({});
Latest.args = {};
Latest.parameters = {
  controls: { hideNoControlsWarning: true },
};
