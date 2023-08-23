import React from "react";
import PropTypes from "prop-types";
import "./DefaultTitle.scss";

import { getContrast } from "../../../utils/getContrast/getContrast";

/**
 * @function DefaultTitle
 * @description The title component for a scroll animation. Styled similarly to
 * a stanza
 * @author Alexander Burdiss
 * @since 6/4/21
 * @version 1.3.0
 * @param {object} props The JSX props passed to this React component
 * @param {String} props.children The title of the scroll animation to render
 * @param {String} props.background The color of the background for this title
 * component
 * @param {String} props.author The author of the poem
 * @param {number} props.stanzaCount The number of stanzas in the body
 */
export default function DefaultTitle({ children, background, author }) {
  return (
    <header
      className="ScrollAnimation-Title-Container"
      style={{
        backgroundColor: background,
      }}
      id="title"
    >
      <div
        className="ScrollAnimation-Title-Border"
        style={{
          color: getContrast(background),
        }}
      >
        <h1>{children}</h1>
        <h2>{author}</h2>
      </div>
    </header>
  );
}

DefaultTitle.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  author: PropTypes.node,
};
