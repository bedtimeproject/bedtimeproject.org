// @ts-check
import React, { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
import "./Parents.scss";

import sanityClient from "../../client";

import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import SecondaryHeadline from "../../Components/Structural/SecondaryHeadline/SecondaryHeadline";

/**
 * @namespace Parents
 * @function Parents
 * @author Alexander Burdiss
 * @since 11/08/21
 * @version 1.2.0
 * @component
 */
export default function Parents() {
  const [sections, setSections] = useState(null);
  const [faq, setFaq] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "faq"] | order(sortOrder) {
          name,
          body,
        }`
      )
      .then(setFaq)
      .catch(console.error);
    sanityClient
      .fetch(
        `*[_type == "parentInfo"] | order(sortOrder) {
          name,
          body,
        }`
      )
      .then(setSections)
      .catch(console.error);
  }, []);

  return (
    <StandardWrapper>
      <div className="Parents-Container">
        <PageTitle>Parents</PageTitle>
        {sections && (
          <div className="Sections-Container">
            {sections.map((section) => (
              <div className="Section" key={section.name}>
                <h3>{section.name}</h3>
                <BlockContent
                  blocks={section.body}
                  projectId={sanityClient.config().projectId}
                  dataset={sanityClient.config().dataset}
                />
              </div>
            ))}
          </div>
        )}
        {faq && (
          <>
            <SecondaryHeadline>FAQ</SecondaryHeadline>
            <div className="Faq-Container">
              {faq.map((question) => (
                <div className="Section" key={question.name}>
                  <h3>{question.name}</h3>
                  <BlockContent
                    blocks={question.body}
                    projectId={sanityClient.config().projectId}
                    dataset={sanityClient.config().dataset}
                  />
                </div>
              ))}
            </div>
          </>
        )}
        <div className="Links-Container">
          {/* <StoryButton link="/parents/create-pwa">Create a PWA</StoryButton> */}
        </div>
      </div>
    </StandardWrapper>
  );
}
