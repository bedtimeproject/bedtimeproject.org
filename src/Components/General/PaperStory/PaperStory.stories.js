import React from "react";
import PaperStory from "./PaperStory";

export default {
  title: "Components/General/PaperStory",
  component: PaperStory,
  argTypes: {},
};

const Template = (args) => <PaperStory {...args} />;

export const Default = Template.bind({});
Default.args = {};
