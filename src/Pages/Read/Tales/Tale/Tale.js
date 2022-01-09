// @ts-check
import React, { useState, useEffect, useContext } from "react";
import "./Tale.scss";

import SEO from "../../../../Components/Structural/SEO/SEO";
import PaperStory from "../../../../Components/General/PaperStory/PaperStory";
import { addDrupalUrlToImageTag } from "../../../../utils/addDrupalUrlToImageTag/addDrupalUrlToImageTag";
import { useParams } from "react-router-dom";
import StandardWrapper from "../../../../Components/Structural/StandardWrapper/StandardWrapper";
import { AppContext } from "../../../../Contexts/AppContext";
import { formatUrlString } from "../../../../utils/formatUrlString/formatUrlString";

/**
 * @namespace Tale
 * @function Tale
 * @description Handles fetching the data for an individual tale, and
 * passing that data to PaperStory.
 * @author Alexander Burdiss
 * @since 10/17/21
 * @version 2.0.0
 * @component
 */
export default function Tale() {
  let params = useParams();
  const { state } = useContext(AppContext);
  const [taleData, setTaleData] = useState({ title: undefined });

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
      const storedTale = state?.tales?.find((obj) => {
        const urlTitle = formatUrlString(obj.title);
        return urlTitle === params.tale;
      });
      fetch(
        "https://drupal.bedtimeproject.dev/rest/views/tale?title=" +
          storedTale?.title
      )
        .then((resp) => resp.json())
        .then((data) => {
          const dataWithProcessedChapters = {
            ...data[0],
            field_chapters: addDrupalUrlToImageTag(data[0]?.field_chapters),
          };
          setTaleData(dataWithProcessedChapters);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.tales]
  );

  return (
    <StandardWrapper>
      <SEO title={taleData.title} />
      <PaperStory
        storyData={taleData}
        backLink="/read/stories"
        backLinkText="Back to Stories"
      />
    </StandardWrapper>
  );
}
