// @ts-check
import React, { useState, useEffect } from "react";
import "./Parents.scss";

import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import SecondaryHeadline from "../../Components/Structural/SecondaryHeadline/SecondaryHeadline";

import { addDrupalUrlToImageTag } from "../../utils/addDrupalUrlToImageTag/addDrupalUrlToImageTag";

/**
 * @namespace Parents
 * @function Parents
 * @author Alexander Burdiss
 * @since 11/08/21
 * @version 1.1.0
 * @component
 */
export default function Parents() {
  const [sections, setSections] = useState(null);
  const [faq, setFaq] = useState(null);

  useEffect(() => {
    fetch("https://drupal.bedtimeproject.dev/rest/views/parents")
      .then((resp) => resp.json())
      .then((data) => {
        setSections(data[0].field_sections);
        setFaq(data[0].field_chapters);
      });
  }, []);

  return (
    <StandardWrapper>
      <div className="Parents-Container">
        <PageTitle>Parents</PageTitle>
        {sections && (
          <div
            className="Sections-Container"
            dangerouslySetInnerHTML={{
              __html: addDrupalUrlToImageTag(sections),
            }}
          />
        )}
        <SecondaryHeadline>FAQ</SecondaryHeadline>
        {faq && (
          <div
            className="Faq-Container"
            dangerouslySetInnerHTML={{ __html: faq }}
          />
        )}
        <div className="Links-Container">
          {/* <StoryButton link="/parents/create-pwa">Create a PWA</StoryButton> */}
        </div>
      </div>
    </StandardWrapper>
  );
}
