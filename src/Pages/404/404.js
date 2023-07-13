import React from "react";

// Components
import ForestMountains from "../../Components/Background/ForestMountains/ForestMountains";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import SEO from "../../Components/Structural/SEO/SEO";

// Utils
import { shuffle } from "../../utils/shuffle/shuffle";

// Assets
import oneLiners from "./404OneLiners";
import scroll from "./scroll.svg";
import "./404.scss";
import { Link } from "react-router-dom";

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
        <SEO title="404 - Page not found" />
        <ForestMountains />
        <img src={scroll} alt="" className="FourOhFour-Scroll" />
        <div className="FourOhFour-Scroll-Text-Container">
          <h1>404 Error</h1>
          <p>Whoops! Unfortunately this page was not found.</p>
          <p className="FourOhFour-One-Liner-Container">
            {getRandomOneLiner()}
          </p>
          <p>Sincerely, C.A. Moonbloom</p>
          <Link to="/">Head back home</Link>
        </div>
      </div>
    </StandardWrapper>
  );
}
