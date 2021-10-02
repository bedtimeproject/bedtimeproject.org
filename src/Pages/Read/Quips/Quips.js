import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";
import React, { useEffect, useState } from "react";

import Breadcrumb from "../../../Components/Structural/Breadcrumb/Breadcrumb";
import LimerickButton from "../../../Components/Buttons/QuipButton/QuipButton";
import LimerickDisplay from "./QuipsDisplay/QuipsDisplay";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

import "./Quips.scss";

/**
 * @function Limericks
 * @description The main parent component for all of the screens and components
 * that are in the Limerick tab.
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 2.0.0
 * @component
 * @example
 * <Limericks />
 */
export default function Quips() {
  const [limericks, setLimericks] = useState([]);
  const [latestQuip, setLatestQuip] = useState({});

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
      function fetchLimericks() {
        fetch("https://drupal.bedtimeproject.dev/rest/views/quips")
          .then((resp) => resp.json())
          .then((data) => setLimericks(data));
      }
      fetchLimericks();
      getLatestQuip();
    },
    []
  );

  function getLatestQuip() {
    fetch("https://drupal.bedtimeproject.dev/rest/views/quips/latest", {
      mode: "cors",
    })
      .then((resp) => resp.json())
      .then((data) => setLatestQuip(data[0]))
      .catch(() => {});
  }

  return (
    <Switch>
      <Route exact path="/read/quips">
        <Helmet>
          <title>Quips | The Bedtime Project</title>
        </Helmet>
        <PageTitle>Quips</PageTitle>
        <div className="Limerick-Display-Container">
          {limericks.map((limerick, index) => {
            return (
              <LimerickButton
                key={index}
                link={`/read/quips/${limerick.title}`}
              >
                {limerick.title}
              </LimerickButton>
            );
          })}
        </div>
      </Route>

      <Route exact path="/read/quips/latest">
        <Helmet>
          <title>Latest Quip | The Bedtime Project</title>
        </Helmet>
        <Breadcrumb link="/read/quips/">Quips</Breadcrumb>
        <LimerickDisplay limerick={latestQuip} />
      </Route>

      {limericks.map((limerick, index) => {
        return (
          <Route key={index} path={`/read/quips/${limerick.title}`}>
            <Helmet>
              <title>{limerick.title} | The Bedtime Project</title>
            </Helmet>
            <Breadcrumb link="/read/quips/">Quips</Breadcrumb>
            <LimerickDisplay limerick={limerick} />
          </Route>
        );
      })}
    </Switch>
  );
}
