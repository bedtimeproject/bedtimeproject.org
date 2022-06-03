import React, { useContext, useEffect, useState } from "react";

import SEO from "../../../../Components/Structural/SEO/SEO";
import PaperStory from "../../../../Components/General/PaperStory/PaperStory";
import { useParams } from "react-router-dom";
import StandardWrapper from "../../../../Components/Structural/StandardWrapper/StandardWrapper";
import { AppContext } from "../../../../Contexts/AppContext";

import sanityClient from "../../../../client";

/**
 * @namespace Story
 * @function Story
 * @description Handles grabbing the data for an individual story and passing
 * that information to PaperStory.
 * @author Alexander Burdiss
 * @since 10/14/21
 * @version 3.0.0
 * @component
 */
export default function Story() {
  const params = useParams();
  const { state } = useContext(AppContext);
  const [storyData, setStoryData] = useState({ title: undefined });

  useEffect(
    /**
     * @function Story~useEffect~getStoryData
     * @description Handles fetching the story data for the story being visited
     * on page load.
     * @author Alexander Burdiss
     * @since 10/16/21
     * @version 2.0.0
     */
    function getStoryData() {
      const slug = params.story;
      sanityClient
        .fetch(
          `*[slug.current == $slug] {
        title,
        slug,
        author,
        mainImage,
        alt,
        more,
        body,
      }`,
          { slug }
        )
        .then((data) => setStoryData(data[0]));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.stories]
  );

  return (
    <StandardWrapper>
      <SEO title={storyData.title} />
      <PaperStory
        storyData={storyData}
        backLink="/read/stories"
        backLinkText="Back to Stories"
      />
    </StandardWrapper>
  );
}
