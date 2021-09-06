import React from "react";
import "./CenteredTitle.scss";

import { getContrast } from "../../../utils/getContrast/getContrast";

/**
 * @namespace CenteredTitle
 * @function CenteredTitle
 * @description The title component for a scroll animation. Styled similarly
 * to the DefaultTitle, but centered on the page.
 * @author Alexander Burdiss
 * @since 9/5/21
 * @version 1.0.0
 * @param props The JSX props passed to this React component
 * @param {String} props.children The title of the scroll animation to render
 * @param {String} props.background The color of the background for this title
 * component
 * @param {String} props.author The author of the poem
 * @param {number} props.stanzaCount The number of stanzas in the body
 */
export default function CenteredTitle({ children, background, author }) {
  return (
    <div
      className="ScrollAnimation-CenteredTitle-Container"
      style={{
        backgroundColor: background,
      }}
      id="title"
    >
      <div
        className="ScrollAnimation-CenteredTitle-Border"
        style={{
          color: getContrast(background),
        }}
      >
        <h1>{children}</h1>
        <h2>{author}</h2>
      </div>
    </div>
  );
}
