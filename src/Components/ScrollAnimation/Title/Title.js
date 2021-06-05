import React from "react";
import { getContrast } from "../../../util/getContrast/getContrast";

/**
 * @function Title
 * @description The title component for a scroll animation. Styled similarly to
 * a stanza
 * @author Alexander Burdiss
 * @since 6/4/21
 * @version 1.1.0
 * @param props The JSX props passed to this React component
 * @param {String} props.children The title of the scroll animation to render
 * @param {String} props.background The color of the background for this title
 * component
 * @param {String} props.author The author of the poem
 */
export default function Title({ children, background, author }) {
  return (
    <div
      className="ScrollAnimation-Title-Container"
      style={{
        backgroundColor: background,
      }}
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
    </div>
  );
}
