import React from "react";
import { Link } from "react-router-dom";
import "./CenteredAttribution.scss";

import { getContrast } from "../../../util/getContrast/getContrast";

/**
 * @namespace CenteredAttribution
 * @function CenteredAttribution
 * @description The final slide of text on a scroll animation, styled to be in
 * the center of the screen.
 * @author Alexander Burdiss
 * @since 9/5/21
 * @version 1.0.0
 * @param props The JSX props passed to this React component
 * @param {React.Component} props.children The text to render on this component
 * @param {string} props.background The background to render on this component
 */
export default function CenteredAttribution({
  children,
  background,
  backlink,
}) {
  return (
    <div
      className="ScrollAnimation-CenteredAttribution-Container"
      style={{ backgroundColor: background }}
      id="attribution"
    >
      <div
        className="ScrollAnimation-CenteredAttribution-Border"
        style={{
          color: getContrast(background),
        }}
      >
        <div>{children}</div>
        <Link to={backlink} className="Back-Button">
          Back to site
        </Link>
      </div>
    </div>
  );
}
