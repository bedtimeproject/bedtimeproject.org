import React from "react";

/**
 * @function Title
 * @description The title component for a scroll animation. Styled similarly to
 * a stanza
 * @author Alexander Burdiss
 * @since 4/4/21
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
      <div className="ScrollAnimation-Title-Border">
        <h1>{children}</h1>
        <h2>{author}</h2>
      </div>
    </div>
  );
}
