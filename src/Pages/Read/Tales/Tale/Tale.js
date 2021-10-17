import React, { useState, useEffect } from "react";
import "./Tale.scss";

import PaperStory from "../../../../Components/General/PaperStory/PaperStory";
import { addDrupalUrlToImageTag } from "../../../../utils/addDrupalUrlToImageTag/addDrupalUrlToImageTag";

/**
 * @namespace Tale
 * @function Tale
 * @author Alexander Burdiss
 * @since 10/17/21
 * @version 1.0.0
 * @component
 */
export default function Tale({ tale }) {
  const [taleData, setTaleData] = useState(tale);

  useEffect(
    /**
     * @function Tale~useEffect~getTaleData
     * @description Handles fetching the tale data for the tale being visited
     * on page load.
     * @author Alexander Burdiss
     * @since 10/16/21
     * @version 1.0.0
     */
    function getTaleData() {
      fetchTaleData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  /**
   * @function Tale~fetchTaleData
   * @description Fetches the individual tale data from the server
   * @author Alexander Burdiss
   * @since 10/16/21
   * @version 1.0.0
   */
  function fetchTaleData() {
    fetch(
      "https://drupal.bedtimeproject.dev/rest/views/tale?title=" + tale.title
    )
      .then((resp) => resp.json())
      .then((data) => {
        const dataWithProcessedChapters = {
          ...data[0],
          field_chapters: addDrupalUrlToImageTag(data[0]?.field_chapters),
        };
        setTaleData(dataWithProcessedChapters);
      });
  }

  return (
    <PaperStory
      storyData={taleData}
      backLink="/read/stories"
      backLinkText="Back to Stories"
    />
  );
}
