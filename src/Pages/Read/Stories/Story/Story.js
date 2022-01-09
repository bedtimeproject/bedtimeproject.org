// @ts-check
import React, { useContext, useEffect, useState } from "react";

import SEO from "../../../../Components/Structural/SEO/SEO";
import PaperStory from "../../../../Components/General/PaperStory/PaperStory";
import { addDrupalUrlToImageTag } from "../../../../utils/addDrupalUrlToImageTag/addDrupalUrlToImageTag";
import { useParams } from "react-router-dom";
import StandardWrapper from "../../../../Components/Structural/StandardWrapper/StandardWrapper";
import { AppContext } from "../../../../Contexts/AppContext";
import { formatUrlString } from "../../../../utils/formatUrlString/formatUrlString";

/**
 * @namespace Story
 * @function Story
 * @description Handles grabbing the data for an individual story and passing
 * that information to PaperStory.
 * @author Alexander Burdiss
 * @since 10/14/21
 * @version 2.0.0
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
     * @version 1.0.0
     */
    function getStoryData() {
      const storedStory = state?.stories?.find((obj) => {
        const urlTitle = formatUrlString(obj.title);
        return urlTitle === params.story;
      });
      fetch(
        "https://drupal.bedtimeproject.dev/rest/views/story?title=" +
          storedStory?.title
      )
        .then((resp) => resp.json())
        .then((data) => {
          const dataWithProcessedChapters = {
            ...data[0],
            field_chapters: addDrupalUrlToImageTag(data[0]?.field_chapters),
          };
          setStoryData(dataWithProcessedChapters);
        });
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
