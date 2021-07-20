import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";

import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import StoryButton from "../../Components/Buttons/StoryButton/StoryButton";
import Breadcrumb from "../../Components/Structural/Breadcrumb/Breadcrumb";
import Tales from "./Tales/Tales";
import Quips from "./Quips/Quips";
import Stories from "./Stories/Stories";

import "./Read.scss";

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
    <div>
      <Helmet>
        <title>Read | The Bedtime Project</title>
      </Helmet>
      <Switch>
        <Route exact path="/read">
          <PageTitle>Read</PageTitle>
          <div className="Read-Button-Container">
            <StoryButton link="/read/stories/">Stories</StoryButton>
            <StoryButton link="/read/tales/">Tales</StoryButton>
            <StoryButton link="/read/quips/">Quips</StoryButton>
          </div>
        </Route>
        <Route path="/read/stories">
          <Breadcrumb link="/read">Read</Breadcrumb>
          <Stories />
        </Route>
        <Route path="/read/tales">
          <Breadcrumb link="/read">Read</Breadcrumb>
          <Tales />
        </Route>
        <Route path="/read/quips">
          <Breadcrumb link="/read">Read</Breadcrumb>
          <Quips />
        </Route>
      </Switch>
    </div>
  );
}
