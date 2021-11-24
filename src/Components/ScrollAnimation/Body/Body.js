// @ts-check
import React from "react";
import DefaultStanza from "../DefaultStanza/DefaultStanza";
import StanzaImage from "../StanzaImage/StanzaImage";

/**
 * @function Body
 * @description The body of an animated story, used for grouping the logic
 * together for easier implementation of an animated story.
 * @author Alexander Burdiss
 * @since 7/8/21
 * @version 2.2.0
 * @param {object} props The JSX props passed to this React component
 * @param {object} props.story The story object with all of the config baked
 * in.
 */
export default function Body({ story }) {
  const oneIndexPercent = 100 / (story.body.length + 2);

  function getBodyAnimation() {
    let bodyAnimationString = `0% {
      background: ${story.titleBackground}
    }
    `;
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
    bodyAnimationString += `100% {
      background: ${story.attributionBackground}
    }`;
    return bodyAnimationString;
  }

  return (
    <main>
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
            <style>{`
              #stanza${index + 1} {
                animation-name: stanza${index + 1};
                animation-duration: 1s;
                animation-timing-function: ease-in-out;
              }

              @keyframes stanza${index + 1} {
                0% {
                  top: 100vh;
                }
                ${
                  index + 1 > 0
                    ? `${(index + 1 - 0.5) * oneIndexPercent}% {
                    top: 100vh;
                  }`
                    : ""
                }
                ${(index + 1) * oneIndexPercent}% {
                  top: 34vh;
                }
                ${(index + 1 + 0.5) * oneIndexPercent}% {
                  top: 34vh;
                }
                ${(index + 1 + 1) * oneIndexPercent}% {
                  top: -100vh;
                }
                100% {
                  top: -100%;
                }
              }
            `}</style>
            {
              {
                default: (
                  <DefaultStanza
                    index={index + 1}
                    background={story.stanzaBackgroundColor}
                  >
                    {stanza.stanza}
                  </DefaultStanza>
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
                  url={imageObject.url}
                  rotation={imageObject.rotation}
                  scale={imageObject.scale}
                  animationOverlap={story.animationOverlap}
                >
                  {imageObject.component}
                </StanzaImage>
              );
            })}
          </div>
        );
      })}
    </main>
  );
}
