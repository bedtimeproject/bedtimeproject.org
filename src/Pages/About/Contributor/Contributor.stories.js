import React from "react";

import Contributor from "./Contributor";

import user from "../user.svg";
import alexBio from "../bios/Alex.md";
import danielBio from "../bios/Daniel.md";

export default {
  title: "Pages/Contributor",
  component: Contributor,
  argTypes: {
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
    image: {
      options: [user],
      control: {
        type: "select",
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
  image: user,
};
