import React from "react";
import "./BedtimeStories.scss";

import StoryButton from "../../../Components/Buttons/StoryButton/StoryButton";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import SEO from "../../../Components/Structural/SEO/SEO";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

/**
 * @namespace BedtimeStories
 * @function BedtimeStories
 * @author Alexander Burdiss
 * @since 10/17/21
 * @version 1.0.0
 * @component
 */
export default function BedtimeStories() {
  return (
    <StandardWrapper>
      <div className="BedtimeStories-Container">
        <SEO title="Bedtime Stories" />
        <PageTitle>Bedtime Stories</PageTitle>
        <div className="BedtimeStories-Button-Container">
          <StoryButton link="/read/bedtime-stories/the-lady-and-the-frog">
            The Lady and the Frog
          </StoryButton>
          <StoryButton link="/read/bedtime-stories/mrs-blue-sky">
            Mrs. Blue Sky
          </StoryButton>
          <StoryButton link="/read/bedtime-stories/the-guide-to-sunset">
            The Guide to Sunset
          </StoryButton>
        </div>
      </div>
    </StandardWrapper>
  );
}
