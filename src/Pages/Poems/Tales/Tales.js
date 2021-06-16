import React from "react";
import StoryButton from "../../../Components/Buttons/StoryButton/StoryButton";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

export default function Tales() {
  return (
    <div>
      <PageTitle>Tales</PageTitle>
      <div className="Tales-Button-Container">
        <StoryButton link="/poems/tales/the-lady-and-the-frog">
          The Lady and the Frog
        </StoryButton>
        <StoryButton link="/poems/tales/mrs-blue-sky">
          Mrs. Blue Sky
        </StoryButton>
        <StoryButton link="/poems/tales/the-guide-to-sunset">
          The Guide to Sunset
        </StoryButton>
      </div>
    </div>
  );
}
