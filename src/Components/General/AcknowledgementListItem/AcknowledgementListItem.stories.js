import React from "react";

import AcknowledgementListItem from "./AcknowledgementListItem";

export default {
  title: "General/Acknowledgement List Item",
  component: AcknowledgementListItem,
  argTypes: {
    name: {
      name: "Name",
      control: {
        type: "text",
      },
    },
    contribution: {
      name: "Contribution",
      control: {
        type: "text",
      },
    },
    linked: {
      name: "Link",
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => (
  <AcknowledgementListItem {...args} link={args.linked ? "/" : undefined} />
);

export const Default = Template.bind({});
Default.args = {
  name: "Alexander Burdiss",
  contribution: "Literally almost everything on this site",
  linked: false,
};

export const Linked = Template.bind({});
Linked.args = {
  name: "Alexander Burdiss",
  contribution: "Literally almost everything on this site",
  linked: true,
};
