import React from "react";
import { MockRouter } from "../../../../Jest/MockRouter";

import ShelfLabelComponent from "./ShelfLabel";

function ShelfLabel(props) {
  return (
    <MockRouter>
      <ShelfLabelComponent link="#" {...props} />
    </MockRouter>
  );
}

export default {
  title: "General/Bookshelf/ShelfLabel",
  component: ShelfLabel,
  argTypes: {
    title: {
      name: "Text",
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <ShelfLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Read",
};
