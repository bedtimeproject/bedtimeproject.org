import React from "react";
import Stanza from "../DefaultStanza/DefaultStanza";
import StanzaImage from "../StanzaImage/StanzaImage";

/**
 * @function Body
 * @description The body of an animated story, used for grouping the logic
 * together for easier implementation of an animated story.
 * @author Alexander Burdiss
 * @since 7/8/21
 * @version 2.0.0
 * @param props The JSX props passed to this React component
 * @param {Object[]} props.story The story object with all of the config baked
 * in.
 */
export default function Body({ story }) {
  const oneIndexPercent = 100 / (story.body.length + 2);

  function getBodyAnimation() {
    let bodyAnimationString = "";
    story.body.forEach((stanza, index) => {
      bodyAnimationString += `${(index + 1) * oneIndexPercent}% {
          background: ${
            stanza.background ? stanza.background : story.defaultBackgroundColor
          };
        }
        ${(index + 1.5) * oneIndexPercent}% {
          background: ${
            stanza.background ? stanza.background : story.defaultBackgroundColor
          };
        }
        `;
    });
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
      {story.body.map((stanza, index) => {
        return (
          <div key={index}>
            {
              {
                default: (
                  <Stanza
                    index={index + 1}
                    background={story.stanzaBackgroundColor}
                    stanzaCount={story.body.length}
                    bodyBackground={
                      stanza.background
                        ? stanza.background
                        : story.defaultBackgroundColor
                    }
                  >
                    {stanza.stanza}
                  </Stanza>
                ),
              }[story.stanzaCard]
            }
            {stanza.images?.map((imageObject, imageIndex) => {
              return (
                <StanzaImage
                  index={index + 1}
                  imageIndex={imageIndex}
                  stanzaCount={story.body.length}
                  key={"" + index + imageIndex}
                  animation={imageObject.animation}
                  positionX={imageObject.positionX}
                  positionY={imageObject.positionY}
                  stanzaDuration={imageObject.stanzaCount}
                  animationOverlap={story.animationOverlap}
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
