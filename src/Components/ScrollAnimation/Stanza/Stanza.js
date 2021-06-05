import React from "react";

/**
 * @todo Process the background color and dynamically choose black or white text
 *
 * @function Stanza
 * @description One stanza of text in a scroll animation story.
 * @param props The JSX props passed to this React component
 * @param {React.Component} props.children The paragraphs to render in this
 * component
 * @author Alexander Burdiss
 * @since 6/4/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Stanza>
 *   <p>Some text</p>
 * </Stanza>
 * ```
 */
export default function Stanza({ children, background }) {
  return (
    <div
      className="ScrollAnimation-Stanza-Container"
      style={{
        backgroundColor: background,
      }}
    >
      {children}
    </div>
  );
}
