import React from "react";
import { MockRouter } from "../../../../Jest/MockRouter";

import DrawersComponent from "./Drawers";

function Drawers(props) {
  return (
    <MockRouter>
      <DrawersComponent href="#" {...props} />
    </MockRouter>
  )
}

export default {
  title: "General/Bookshelf/Drawers",
  component: Drawers,
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text',
      }
    }
  },
};

const Template = (args) => <Drawers {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Quips'
};
