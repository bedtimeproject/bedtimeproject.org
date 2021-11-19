// @ts-check
import React, { useEffect, useState } from "react";
import "./Quips.scss";

import QuipsDisplay from "./QuipsDisplay/QuipsDisplay";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import SEO from "../../../Components/Structural/SEO/SEO";
import Loading from "../../../Components/Structural/Loading/Loading";

/**
 * @function Quips
 * @description The main parent component for all of the screens and components
 * that are in the Quips tab.
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 3.2.0
 * @component
 * @example
 * <Quips />
 */
export default function Quips() {
  const [quips, setQuips] = useState([]);
  const [openQuip, setOpenQuip] = useState(undefined);
  const [error, setError] = useState(false);

  /**
   * @function Quips~closeModalWhenTabNotClicked
   * @description Closes the open Quip if the user clicks anywhere outside the
   * quip.
   * @param {Event} event
   * @author Alexander Burdiss
   * @since 11/6/21
   * @version 1.0.0
   */
  function closeModalWhenTabNotClicked(event) {
    const modalButtons = Array.from(
      document.querySelectorAll(".QuipTitleButton")
    );
    const modalTitles = Array.from(
      document.querySelectorAll(".QuipTitleButton h2")
    );
    // @ts-ignore
    const buttonClicked = modalButtons.includes(event.target);
    // @ts-ignore
    const titleClicked = modalTitles.includes(event.target);
    if (!buttonClicked && !titleClicked) {
      setOpenQuip(undefined);
    }
  }

  /**
   * @async
   * @function Quips~fetchQuips
   * @description Fetches All of the quips from the drupal backend and adds
   * them to the state variable in this component.
   * @author Alexander Burdiss
   * @since 5/27/21
   * @version 2.0.0
   */
  function fetchQuips() {
    fetch("https://drupal.bedtimeproject.dev/rest/views/quips")
      .then((resp) => resp.json())
      .then((data) => {
        setQuips(data);
        setError(false);
      })
      .catch(() => setError(true));
  }

  useEffect(
    /**
     * @function Quips~useEffect~setupComponent
     * @description Calls all logic required on component setup.
     * @version 1.0.1
     */
    function setupComponent() {
      fetchQuips();
      window.addEventListener("click", closeModalWhenTabNotClicked);
      return () => {
        window.removeEventListener("click", closeModalWhenTabNotClicked);
      };
    },
    []
  );

  return (
    <StandardWrapper>
      <SEO title="Quips" />
      <div className="QuipsContainer">
        <div className="Limerick-Display-Container">
          <div className="Drawer">
            {error ? (
              <div className="QuipErrorWrapper">
                <p>Please check your connection and reload this page.</p>
              </div>
            ) : quips.length ? (
              quips.map((quip, index) => {
                return (
                  <QuipsDisplay
                    quip={quip}
                    key={index}
                    index={index}
                    openQuip={openQuip}
                    setOpenQuip={setOpenQuip}
                  />
                );
              })
            ) : (
              <div className="QuipsLoader">
                <Loading />
              </div>
            )}
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
