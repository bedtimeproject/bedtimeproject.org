import React from "react";
import StoryButton from "../../../Components/Buttons/StoryButton/StoryButton";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

/**
 * @function Poems
 * @description Shows links to each of the different poems on the website
 * @author Alexander Burdiss
 * @since 5/14/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Poems />
 * ```
 */
export default function Poems() {
  return (
    <div>
      <PageTitle>Poems</PageTitle>
      <div className="Poems-Button-Container">
        <StoryButton link="/stories/poems/the-lady-and-the-frog">
          The Lady And The Frog
        </StoryButton>
        <StoryButton link="/stories/poems/mrs-blue-sky">
          Mrs. Blue Sky
        </StoryButton>
      </div>
    </div>
  );
}
