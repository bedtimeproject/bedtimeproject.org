import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MockRouter } from "../../Jest/MockRouter";

import HomeComponent from "./Home";

function Home(props) {
  return (
    <HelmetProvider>
      <MockRouter>
        <HomeComponent {...props} />
      </MockRouter>
    </HelmetProvider>
  )
}

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {},
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
