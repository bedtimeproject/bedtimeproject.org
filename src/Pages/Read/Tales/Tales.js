import React from "react";

import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import StoryButton from "../../../Components/Buttons/StoryButton/StoryButton";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";

import "./Tales.scss";
import SEO from "../../../Components/Structural/SEO/SEO";

/**
 * @function Tales
 * @description A collection of longer poems on the site
 * @author Alexander Burdiss
 * @since 6/15/21
 * @version 1.1.0
 * @component
 * @example
 * <Tales />
 */
export default function Tales() {
  return (
    <StandardWrapper>
      <SEO title="Tales" />
      <PageTitle>Tales</PageTitle>
    </StandardWrapper>
  );
}
