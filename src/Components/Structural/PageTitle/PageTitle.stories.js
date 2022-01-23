import React from "react";
import { MockRouter } from "../../../Jest/MockRouter";

import PageTitleComponent from "./PageTitle";

function PageTitle(props) {
  return (
    <MockRouter>
      <PageTitleComponent {...props} />
    </MockRouter>
  );
}

export default {
  title: "Structural/Page Title",
  component: PageTitle,
  argTypes: {
    children: {
      name: "Text",
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <PageTitle link="#" {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Page Heading!",
};
