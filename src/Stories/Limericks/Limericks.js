import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import LimerickDisplay from "./LimerickDisplay/LimerickDisplay";
import LimerickButton from "../../Components/Buttons/LimerickButton/LimerickButton";
import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import Breadcrumb from "../../Components/Structural/Breadcrumb/Breadcrumb";
import allLimericks from "./assets/_registry";
import { getTitleFromMarkdown } from "../../util/getTitleFromMarkdown/getTitleFromMarkdown";
import { getDateFromMarkdown } from "../../util/getDateFromMarkdown/getDateFromMarkdown";

/**
 * @function Limericks
 * @description The main parent component for all of the screens and components
 * that are in the Limerick tab.
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Limericks />
 * ```
 */
export default function Limericks() {
  const [limericks, setLimericks] = useState([]);

  useEffect(
    /**
     * @function Limericks~useEffect~getLimericks
     * @description A synchronous wrapper for fetchLimericks()
     */
    function getLimericks() {
      /**
       * @async
       * @function Limericks~useEffect~getLimericks~fetchLimericks
       * @description Fetches All of the limericks from the registry and adds
       * them to the state variable in this component.
       * @author Alexander Burdiss
       * @since 5/27/21
       * @version 1.0.0
       */
      async function fetchLimericks() {
        let limerickArray = [];
        for (let limerick of allLimericks) {
          let resp = await fetch(limerick);
          let text = await resp.text();
          limerickArray.push(text);
        }
        setLimericks(limerickArray);
      }
      fetchLimericks();
    },
    []
  );

  /**
   * @function Limericks~getLatestLimerick
   * @description Returns the latest limerick as long as its date is not later
   * than the current date.
   * @param {String[]} allLimericks An array of all of the limericks, in
   * markdown form
   * @returns The latest limerick out of all of the limericks.
   * @author Alexander Burdiss
   * @since 5/27/21
   * @version 1.0.0
   */
  function getLatestLimerick(allLimericks) {
    let latestLimerick = allLimericks[0];
    let latestLimerickDate = undefined;

    for (let limerick of allLimericks) {
      const limerickDate = new Date(getDateFromMarkdown(limerick));
      if (
        limerickDate < new Date() &&
        (!latestLimerickDate || latestLimerickDate < limerickDate)
      ) {
        latestLimerickDate = limerickDate;
        latestLimerick = limerick;
      }
    }

    return latestLimerick;
  }

  return (
    <Switch>
      <Route exact path="/stories/limericks">
        <PageTitle>Limericks</PageTitle>
        {limericks.map((limerick, index) => {
          const date = getDateFromMarkdown(limerick);
          // If the limerick is dated later than today, don't show a link
          if (new Date(date) > new Date()) {
            return null;
          }
          const title = getTitleFromMarkdown(limerick);
          return (
            <LimerickButton key={index} link={`/stories/limericks/${title}`}>
              {title}
            </LimerickButton>
          );
        })}
      </Route>

      <Route path="/stories/limericks/latest">
        <Breadcrumb link="/stories/limericks/">Limericks</Breadcrumb>
        <LimerickDisplay limerick={getLatestLimerick(limericks)} />
      </Route>

      {limericks.map((limerick, index) => {
        const title = getTitleFromMarkdown(limerick);
        return (
          <Route key={index} path={`/stories/limericks/${title}`}>
            <Breadcrumb link="/stories/limericks/">Limericks</Breadcrumb>
            <LimerickDisplay limerick={limerick} />
          </Route>
        );
      })}
    </Switch>
  );
}
