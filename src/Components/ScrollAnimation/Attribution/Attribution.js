import React from "react";
import { Link } from "react-router-dom";
import "./Attribution.scss";

import { getContrast } from "../../../util/getContrast/getContrast";

/**
 * @function Attribution
 * @description The final slide of text on a scroll animation
 * @author Alexander Burdiss
 * @since 6/5/21
 * @version 1.2.0
 * @param props The JSX props passed to this React component
 * @param {React.Component} props.children The text to render on this component
 * @param {string} props.background The background to render on this component
 * @param {number} props.stanzaCount The number of Stanzas that are in the
 * current scroll animation poem.
 */
export default function Attribution({
  children,
  background,
  stanzaCount,
  backlink,
}) {
  const oneIndexPercent = 100 / (stanzaCount + 2);
  return (
    <div>
      <style>{`
        #attribution {
          animation-name: attribution;
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
        }

        @keyframes attribution {
          0% {
            top: 100vh;
          }
          ${(stanzaCount + 1) * oneIndexPercent}% {
            top: 100vh;
          }
          100% {
            top: 25vh;
          }
        }
      `}</style>
      <div
        className="ScrollAnimation-Attribution-Container"
        style={{ backgroundColor: background }}
        id="attribution"
      >
        <div
          className="ScrollAnimation-Attribution-Border"
          style={{
            color: getContrast(background),
          }}
        >
          {children}
          <Link to={backlink} className="Back-Button">
            Back to site
          </Link>
        </div>
      </div>
    </div>
  );
}
