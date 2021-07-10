import React from "react";
import Stanza from "../Stanza/Stanza";
import StanzaImage from "../StanzaImage/StanzaImage";

/**
 * @function Body
 * @description The body of an animated story, used for grouping the logic
 * together for easier implementation of an animated story.
 * @author Alexander Burdiss
 * @since 7/8/21
 * @version 1.0.0
 * @param props The JSX props passed to this React component
 * @param {string} props.defaultBackgroundColor The default background color
 * for the body to be used when none is present on a stanza.
 * @param {string} props.stanzaBackgroundColor The default color of the stanzas
 * to be used throughout the animation.
 * @param {Object[]} props.stanzas An array of stanzas, to be iterated through
 * in the body of an animated story.
 */
export default function Body({
  stanzaBackgroundColor,
  stanzas,
  defaultBackgroundColor,
}) {
  const oneIndexPercent = 100 / (stanzas.length + 2);

  function getBodyAnimation() {
    let bodyAnimationString = "";
    stanzas.forEach((stanza, index) => {
      bodyAnimationString += `${(index + 1) * oneIndexPercent}% {
          background-color: ${
            stanza.backgroundColor
              ? stanza.backgroundColor
              : defaultBackgroundColor
          }
        }
        ${(index + 1.5) * oneIndexPercent}% {
          background-color: ${
            stanza.backgroundColor
              ? stanza.backgroundColor
              : defaultBackgroundColor
          }
        }
        `;
    });
    console.log(bodyAnimationString);
    return bodyAnimationString;
  }

  return (
    <div>
      <style>{`
        body {
          animation-name: scrollBody;
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
        }

        @keyframes scrollBody {
          ${getBodyAnimation()}
        }
      `}</style>
      {stanzas.map((stanza, index) => {
        return (
          <div key={index}>
            <Stanza
              index={index + 1}
              background={stanzaBackgroundColor}
              stanzaCount={stanzas.length}
              bodyBackground={
                stanza.backgroundColor
                  ? stanza.backgroundColor
                  : defaultBackgroundColor
              }
            >
              {stanza.stanza}
            </Stanza>
            {stanza.images?.map((imageObject, imageIndex) => {
              return (
                <StanzaImage
                  index={index + 1}
                  stanzaCount={stanzas.length}
                  key={"" + index + imageIndex}
                >
                  {imageObject.component}
                </StanzaImage>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
