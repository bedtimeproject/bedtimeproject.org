// @ts-check
import React, { useEffect, useState } from "react";
import PaperStory from "../../../../Components/General/PaperStory/PaperStory";
import { addDrupalUrlToImageTag } from "../../../../utils/addDrupalUrlToImageTag/addDrupalUrlToImageTag";

/**
 * @namespace Story
 * @function Story
 * @author Alexander Burdiss
 * @since 10/14/21
 * @version 1.0.1
 * @component
 */
export default function Story({ story }) {
  const [storyData, setStoryData] = useState(story);

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
      fetchStoryData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  /**
   * @function fetchStoryData
   * @description Fetches the individual story data from the server
   * @author Alexander Burdiss
   * @since 10/16/21
   * @version 1.0.0
   */
  function fetchStoryData() {
    fetch(
      "https://drupal.bedtimeproject.dev/rest/views/story?title=" + story?.title
    )
      .then((resp) => resp.json())
      .then((data) => {
        const dataWithProcessedChapters = {
          ...data[0],
          field_chapters: addDrupalUrlToImageTag(data[0]?.field_chapters),
        };
        setStoryData(dataWithProcessedChapters);
      });
  }

  return (
    <PaperStory
      storyData={storyData}
      backLink="/read/stories"
      backLinkText="Back to Stories"
    />
  );
}
