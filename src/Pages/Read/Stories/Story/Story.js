import React, { useEffect, useState } from "react";
import MoreContentSoon from "../../../../Components/General/MoreContentSoon/MoreContentSoon";
import PageTitle from "../../../../Components/Structural/PageTitle/PageTitle";
import { addDrupalUrlToImageTag } from "../../../../utils/addDrupalUrlToImageTag/addDrupalUrlToImageTag";
import "./Story.scss";

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
   */
  function fetchStoryData() {
    fetch(
      "https://drupal.bedtimeproject.dev/rest/views/story?title=" + story.title
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

  console.log(storyData);

  return (
    <div className="Story-Container">
      {/* Styles for the Breadcrumbs */}
      <style>{`
        @media screen and (min-width: 800px) {
          .Breadcrumb-Container {
            left: 90px
          }
        }
      `}</style>
      <div className="Paper-Container">
        <div className="Heading-Information">
          <PageTitle>{storyData.title}</PageTitle>
          <div>By {storyData.field_author}</div>
        </div>
        <div className="Chapters">
          {storyData.field_chapters && (
            <div
              dangerouslySetInnerHTML={{ __html: storyData.field_chapters }}
            />
          )}
        </div>
        {storyData.field_more_content_coming_soon == "True" && (
          <MoreContentSoon
            backLink="/read/stories"
            backLinkText="Back to Stories"
          />
        )}
      </div>
    </div>
  );
}
