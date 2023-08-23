import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./DefaultAttribution.scss";

import { getContrast } from "../../../utils/getContrast/getContrast";

/**
 * @namespace DefaultAttribution
 * @function DefaultAttribution
 * @description The final slide of text on a scroll animation
 * @author Alexander Burdiss
 * @since 6/5/21
 * @version 1.3.0
 * @param {object} props The JSX props passed to this React component
 * @param {React.Component} props.children The text to render on this component
 * @param {string} props.background The background to render on this component
 * @param {string} props.backlink
 */
export default function DefaultAttribution({ children, background, backlink }) {
  return (
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
        <div>{children}</div>
        <Link to={backlink} className="Back-Button">
          Back to site
        </Link>
      </div>
    </div>
  );
}

DefaultAttribution.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  backlink: PropTypes.string,
};
