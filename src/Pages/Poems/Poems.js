import React from "react";
import StoryButton from "../../Components/Buttons/StoryButton/StoryButton";
import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import { Route, Switch } from "react-router";

import Limericks from "./Quips/Quips";
import Breadcrumb from "../../Components/Structural/Breadcrumb/Breadcrumb";
import Tales from "./Tales/Tales";

/**
 * @function Poems
 * @description Shows links to each of the different poems on the website
 * @author Alexander Burdiss
 * @since 5/14/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Poems />
 * ```
 */
export default function Poems() {
  return (
    <div>
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
