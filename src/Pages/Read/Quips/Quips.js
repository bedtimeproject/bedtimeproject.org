import React, { useEffect, useState } from "react";

import QuipsDisplay from "./QuipsDisplay/QuipsDisplay";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

import "./Quips.scss";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import SEO from "../../../Components/Structural/SEO/SEO";

/**
 * @function Quips
 * @description The main parent component for all of the screens and components
 * that are in the Quips tab.
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 3.0.0
 * @component
 * @example
 * <Quips />
 */
export default function Quips() {
  const [quips, setQuips] = useState([]);
  const [openQuip, setOpenQuip] = useState(undefined);

  useEffect(
    /**
     * @function Quips~useEffect~getQuips
     * @description A synchronous wrapper for fetchQuips and getLatestQuip()
     */
    function getQuips() {
      fetchQuips();
    },
    []
  );

  /**
   * @async
   * @function Quips~fetchQuips
   * @description Fetches All of the quips from the drupal backend and adds
   * them to the state variable in this component.
   * @author Alexander Burdiss
   * @since 5/27/21
   * @version 1.1.0
   */
  function fetchQuips() {
    fetch("https://drupal.bedtimeproject.dev/rest/views/quips")
      .then((resp) => resp.json())
      .then((data) => setQuips(data));
  }

  return (
    <StandardWrapper>
      <SEO title="Quips" />
      <div className="QuipsContainer">
        <div className="Limerick-Display-Container">
          <div className="Drawer">
            {quips.map((quip, index) => {
              return (
                <QuipsDisplay
                  quip={quip}
                  key={index}
                  index={index}
                  openQuip={openQuip}
                  setOpenQuip={setOpenQuip}
                />
              );
            })}
            <div className="drawer">
              <PageTitle>Quips</PageTitle>
              <div className="handle"></div>
            </div>
          </div>
        </div>
      </div>
    </StandardWrapper>
  );
}
