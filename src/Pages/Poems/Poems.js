import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";
import React from "react";

import Breadcrumb from "../../Components/Structural/Breadcrumb/Breadcrumb";
import Limericks from "./Quips/Quips";
import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import StoryButton from "../../Components/Buttons/StoryButton/StoryButton";
import Tales from "./Tales/Tales";

import "./Poems.scss";

/**
 * @function Poems
 * @description Shows links to each of the different poems on the website
 * @author Alexander Burdiss
 * @since 5/14/21
 * @version 1.1.0
 * @component
 * @example
 * ```jsx
 * <Poems />
 * ```
 */
export default function Poems() {
  return (
    <div>
      <Helmet>
        <title>Poems | The Bedtime Project</title>
      </Helmet>
      <Switch>
        <Route exact path="/poems">
          <PageTitle>Poems</PageTitle>
          <div className="Poems-Button-Container">
            <StoryButton link="/poems/tales/">Tales</StoryButton>
            <StoryButton link="/poems/quips/">Quips</StoryButton>
          </div>
        </Route>
        <Route path="/poems/tales">
          <Breadcrumb link="/poems">Poems</Breadcrumb>
          <Tales />
        </Route>
        <Route path="/poems/quips">
          <Breadcrumb link="/poems">Poems</Breadcrumb>
          <Limericks />
        </Route>
      </Switch>
    </div>
  );
}
