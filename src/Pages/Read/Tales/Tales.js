import { Helmet } from "react-helmet";
import React from "react";

import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import StoryButton from "../../../Components/Buttons/StoryButton/StoryButton";

import "./Tales.scss";

/**
 * @function Tales
 * @description A collection of longer poems on the site
 * @author Alexander Burdiss
 * @since 6/15/21
 * @version 1.1.0
 * @component
 * @example
 * ```jsx
 * <Tales />
 * ```
 */
export default function Tales() {
  return (
    <div>
      <Helmet>
        <title>Tales | The Bedtime Project</title>
      </Helmet>
      <PageTitle>Tales</PageTitle>
      <div className="Tales-Button-Container">
        <StoryButton link="/read/tales/the-lady-and-the-frog">
          The Lady and the Frog
        </StoryButton>
        <StoryButton link="/read/tales/mrs-blue-sky">Mrs. Blue Sky</StoryButton>
        <StoryButton link="/read/tales/the-guide-to-sunset">
          The Guide to Sunset
        </StoryButton>
      </div>
    </div>
  );
}
