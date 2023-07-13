import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import "./PaperStory.scss";

import sanityClient from "../../../client";

import PageTitle from "../../Structural/PageTitle/PageTitle";
import MoreContentSoon from "../MoreContentSoon/MoreContentSoon";
import Loading from "../../Structural/Loading/Loading";

import { imageUrl } from "../../../utils/imageUrl/imageUrl";

/**
 * @namespace PaperStory
 * @function PaperStory
 * @description Displays one paper story for the site.
 * @author Alexander Burdiss
 * @since 10/17/21
 * @version 2.0.0
 * @component
 */
export default function PaperStory({ storyData, backLink, backLinkText }) {
  return storyData ? (
    <div className="PaperStory-Container">
      {storyData.title ? (
        <article className="Paper-Container">
          <div className="Heading-Information">
            <PageTitle>{storyData.title}</PageTitle>
            {storyData.author && <div>By {storyData.author}</div>}
          </div>
          <div className="Chapters">
            <img
              src={imageUrl(storyData.mainImage).url()}
              alt={storyData.alt}
            />
            <BlockContent
              blocks={storyData.body}
              projectId={sanityClient.config().projectId}
              dataset={sanityClient.config().dataset}
            />
          </div>
          {storyData.more && (
            <MoreContentSoon backLink={backLink} backLinkText={backLinkText} />
          )}
        </article>
      ) : (
        <div className="PaperStory-Loading-Container">
          <Loading />
        </div>
      )}
    </div>
  ) : null;
}
