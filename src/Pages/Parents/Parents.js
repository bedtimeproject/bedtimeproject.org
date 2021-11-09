import React from "react";
import StoryButton from "../../Components/Buttons/StoryButton/StoryButton";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import "./Parents.scss";

/**
 * @namespace Parents
 * @function Parents
 * @author Alexander Burdiss
 * @since 11/08/21
 * @version 1.0.0
 * @component
 */
export default function Parents() {
  return (
    <StandardWrapper>
      <div className="Parents-Container">
        <div>Parents Works!</div>
        <StoryButton link="/parents/create-pwa">Create a PWA</StoryButton>
      </div>
    </StandardWrapper>
  );
}
