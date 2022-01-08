import React from "react";
import AudioPlayer from "./AudioPlayer";

export default {
  title: "General/AudioPlayer",
  component: AudioPlayer,
  argTypes: {},
};

const Template = (args) => <AudioPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {};
