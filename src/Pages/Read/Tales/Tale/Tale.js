// @ts-check
import React, { useState, useEffect, useContext } from "react";
import "./Tale.scss";

import SEO from "../../../../Components/Structural/SEO/SEO";
import PaperStory from "../../../../Components/General/PaperStory/PaperStory";
import { useParams } from "react-router-dom";
import StandardWrapper from "../../../../Components/Structural/StandardWrapper/StandardWrapper";
import { AppContext } from "../../../../Contexts/AppContext";

import sanityClient from "../../../../client";

/**
 * @namespace Tale
 * @function Tale
 * @description Handles fetching the data for an individual tale, and
 * passing that data to PaperStory.
 * @author Alexander Burdiss
 * @since 10/17/21
 * @version 3.0.0
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
     * @version 2.0.0
     */
    function getTaleData() {
      const slug = params.tale;
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
        .then((data) => setTaleData(data[0]));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.tales]
  );

  return (
    <StandardWrapper>
      <SEO title={taleData.title} />
      <PaperStory
        storyData={taleData}
        backLink="/read/tales"
        backLinkText="Back to Tales"
      />
    </StandardWrapper>
  );
}
