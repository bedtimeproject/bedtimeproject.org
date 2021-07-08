import React from "react";

import { getContrast } from "../../../util/getContrast/getContrast";

import "./Stanza.scss";

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
 * @version 1.2.0
 * @component
 * @example
 * ```jsx
 * <Stanza>
 *   <p>Some text</p>
 * </Stanza>
 * ```
 */
export default function Stanza({
  children,
  background,
  index,
  stanzaCount,
  bodyBackground,
}) {
  const oneIndexPercent = 100 / (stanzaCount + 2);

  return (
    <div>
      <style>{`
        #stanza${index} {
          animation-name: stanza${index};
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
        }

        body {
          background-color: ${bodyBackground}
        }

        @keyframes stanza${index} {
          0% {
            top: 100vh;
          }
          ${
            index > 0
              ? `${(index - 0.5) * oneIndexPercent}% {
              top: 100vh;
            }`
              : ""
          }
          ${index * oneIndexPercent}% {
            top: 25vh;
          }
          ${(index + 0.5) * oneIndexPercent}% {
            top: 25vh;
          }
          ${(index + 1) * oneIndexPercent}% {
            top: -100vh;
          }
          100% {
            top: -100%;
          }
        }
      `}</style>
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
    </div>
  );
}
