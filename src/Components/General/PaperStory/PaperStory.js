// @ts-check
import React from "react";
import "./PaperStory.scss";

import PageTitle from "../../Structural/PageTitle/PageTitle";
import MoreContentSoon from "../MoreContentSoon/MoreContentSoon";

/**
 * @namespace PaperStory
 * @function PaperStory
 * @author Alexander Burdiss
 * @since 10/17/21
 * @version 1.0.0
 * @component
 */
export default function PaperStory({ storyData, backLink, backLinkText }) {
  return storyData ? (
    <div className="PaperStory-Container">
      <article className="Paper-Container">
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
          <MoreContentSoon backLink={backLink} backLinkText={backLinkText} />
        )}
      </article>
    </div>
  ) : null;
}
