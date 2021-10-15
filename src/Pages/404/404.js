import { Helmet } from "react-helmet";
import { shuffle } from "underscore";
import React from "react";

import ForestMountains from "../../Components/Background/ForestMountains/ForestMountains";
import oneLiners from "./404OneLiners";

import "./404.scss";
import scroll from "./scroll.svg";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";

/**
 * @function FourOhFour
 * @description The page that is displayed when the URL the user is searching
 * for doesn't exist on the site.
 * @author Alexander Burdiss
 * @since 6/5/21
 * @version 1.1.1
 */
export default function FourOhFour() {
  /**
   * @function FourOhFour~getRandomOneLiner
   * @description Gets one random one liner from the array of one liners.
   * @author Alexander Burdiss
   * @since 6/5/21
   * @version 1.0.1
   * @returns {string} A random one liner to display on this component
   */
  function getRandomOneLiner() {
    const tempOneLiners = shuffle(oneLiners);
    return tempOneLiners[0];
  }

  return (
    <StandardWrapper>
      <div className="FourOhFour-Container">
        <Helmet>
          <title>404 - Page not found | The Bedtime Project</title>
        </Helmet>
        <ForestMountains />
        <img src={scroll} alt="" className="FourOhFour-Scroll" />
        <div className="FourOhFour-Scroll-Text-Container">
          <h1>404 Error</h1>
          <p>Whoops! Unfortunately this page was not found.</p>
          <p className="FourOhFour-One-Liner-Container">
            {getRandomOneLiner()}
          </p>
          <p>Sincerely, Fostywally</p>
        </div>
      </div>
    </StandardWrapper>
  );
}
