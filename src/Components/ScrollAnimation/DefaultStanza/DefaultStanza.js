import React from "react";

import { getContrast } from "../../../utils/getContrast/getContrast";

import "./DefaultStanza.scss";

/**
 * @function Stanza
 * @description One stanza of text in a scroll animation story.
 * @param props The JSX props passed to this React component
 * @param {React.Component} props.children The paragraphs to render in this
 * component
 * @param {string} props.background The background color to render on this
 * slide
 * @param {number} props.index The index of this stanza, to calculate the scroll
 * linked positioning of the element
 * @param {number} props.stanzaCount The total number of stanzas in this story
 * @param {string} props.bodyBackground The background color of the entire
 * screen for the duration this stanza is visible.
 * @author Alexander Burdiss
 * @since 6/4/21
 * @version 1.2.1
 * @component
 * @example
 * <Stanza>
 *   <p>Some text</p>
 * </Stanza>
 */
export default function DefaultStanza({ children, background, index }) {
  return (
    <div
      id={"stanza" + index}
      className="ScrollAnimation-Stanza-Container"
      style={{
        backgroundColor: background,
        color: getContrast(background),
      }}
    >
      {children}
    </div>
  );
}
