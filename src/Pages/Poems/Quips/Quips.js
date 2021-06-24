import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";
import React, { useEffect, useState } from "react";

import { getDateFromMarkdown } from "../../../util/getDateFromMarkdown/getDateFromMarkdown";
import { getTitleFromMarkdown } from "../../../util/getTitleFromMarkdown/getTitleFromMarkdown";
import allLimericks from "./assets/_registry";
import Breadcrumb from "../../../Components/Structural/Breadcrumb/Breadcrumb";
import LimerickButton from "../../../Components/Buttons/QuipButton/QuipButton";
import LimerickDisplay from "./QuipsDisplay/QuipsDisplay";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import Pagination from "../../../Components/Structural/Pagination/Pagination";

import "./Quips.scss";

/**
 * @function Limericks
 * @description The main parent component for all of the screens and components
 * that are in the Limerick tab.
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 1.2.0
 * @component
 * @example
 * ```jsx
 * <Limericks />
 * ```
 */
export default function Quips() {
  const [limericks, setLimericks] = useState([]);
  const [currentLimericks, setCurrentLimericks] = useState([]);
  const [displayingLimericks, setDisplayingLimericks] = useState([]);

  const MAX_LIMERICKS_PER_PAGE = 20;

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
        getCurrentLimericks(limerickArray);
      }
      fetchLimericks();
    },
    []
  );

  /**
   *
   * @param {*} limerickArray
   */
  function getCurrentLimericks(limerickArray) {
    const tempArray = [];
    // eslint-disable-next-line array-callback-return
    limerickArray.map((limerick) => {
      const date = getDateFromMarkdown(limerick);
      // If the limerick is dated later than today, don't show a link
      if (new Date(date) < new Date()) {
        tempArray.push(limerick);
      }
    });
    setCurrentLimericks(tempArray);
    setDisplayingLimericks(tempArray.slice(0, MAX_LIMERICKS_PER_PAGE));
  }

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

  /**
   * @function Limericks~updateLimericksDisplaying
   * @description A function to handle the pagination click, and update the
   * limericks that are displaying
   * @param {Object} data The data provided by React Pagination
   * @param {Number} data.selected The index of the page to paginate to.
   * @author Alexander Burdiss
   * @since 6/2/21
   * @version 1.0.0
   */
  function updateLimericksDisplaying(data) {
    const startIndex = data.selected * MAX_LIMERICKS_PER_PAGE;
    const nextLimericks = currentLimericks.slice(
      startIndex,
      startIndex + MAX_LIMERICKS_PER_PAGE
    );
    setDisplayingLimericks(nextLimericks);
  }

  return (
    <Switch>
      <Route exact path="/poems/quips">
        <Helmet>
          <title>Quips | The Bedtime Project</title>
        </Helmet>
        <PageTitle>Quips</PageTitle>
        <div className="Limerick-Display-Container">
          {displayingLimericks.map((limerick, index) => {
            const title = getTitleFromMarkdown(limerick);
            return (
              <LimerickButton key={index} link={`/poems/quips/${title}`}>
                {title}
              </LimerickButton>
            );
          })}
        </div>
        {currentLimericks.length > MAX_LIMERICKS_PER_PAGE && (
          <Pagination
            pageCount={Math.ceil(
              currentLimericks.length / MAX_LIMERICKS_PER_PAGE
            )}
            onPageChange={updateLimericksDisplaying}
          />
        )}
      </Route>

      <Route exact path="/poems/quips/latest">
        <Helmet>
          <title>Latest Quip | The Bedtime Project</title>
        </Helmet>
        <Breadcrumb link="/poems/quips/">Quips</Breadcrumb>
        <LimerickDisplay limerick={getLatestLimerick(limericks)} />
      </Route>

      {limericks.map((limerick, index) => {
        const title = getTitleFromMarkdown(limerick);
        return (
          <Route key={index} path={`/poems/quips/${title}`}>
            <Helmet>
              <title>
                {getTitleFromMarkdown(limerick)} | The Bedtime Project
              </title>
            </Helmet>
            <Breadcrumb link="/poems/quips/">Quips</Breadcrumb>
            <LimerickDisplay limerick={limerick} />
          </Route>
        );
      })}
    </Switch>
  );
}
