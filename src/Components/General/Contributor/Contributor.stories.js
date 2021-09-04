import React from "react";

import Contributor from "./Contributor";

import CaptainCode from "../../../assets/images/chess/CaptainCode.png";
import FostyWally from "../../../assets/images/chess/FostyWally.png";

export default {
  title: "General/Contributor",
  component: Contributor,
  argTypes: {
    image: {
      options: [CaptainCode, FostyWally],
      control: {
        type: "select",
      },
    },
    name: {
      name: "Name",
      control: {
        type: "text",
      },
    },
    bio: {
      name: "Bio",
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <Contributor {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Captain Code",
  bio:
    "Captain Code spends his days working a pretty normal office job, but at night he spends his hours fighting digital crime on the internet. He listens to really cool music, and sometimes plays music of his own. Captain Code also has a lot of fun making websites, and animations.",
  image: CaptainCode,
};
