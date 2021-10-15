import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";

import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import StoryButton from "../../Components/Buttons/StoryButton/StoryButton";
import Tales from "./Tales/Tales";
import Quips from "./Quips/Quips";
import Stories from "./Stories/Stories";

import "./Read.scss";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import SEO from "../../Components/Structural/SEO/SEO";

/**
 * @function Read
 * @description The main navigational element for items that people can
 * go to read.
 * @author Alexander Burdiss
 * @since 7/20/21
 * @version 1.0.0
 * @component
 * @example
 * <Read />
 */
export default function Read() {
  return (
    <StandardWrapper>
      <SEO title="Read" />

      <PageTitle>Read</PageTitle>
      <div className="Read-Button-Container">
        <StoryButton link="/read/stories/">Stories</StoryButton>
        <StoryButton link="/read/tales/">Tales</StoryButton>
        <StoryButton link="/read/quips/">Quips</StoryButton>
      </div>
    </StandardWrapper>
  );
}
