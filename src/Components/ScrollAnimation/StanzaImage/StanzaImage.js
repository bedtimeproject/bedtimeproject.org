import React from "react";
import "./StanzaImage.scss";

/**
 * @function stanzaImage
 * @description Displays One image for the stanza.
 * @param {*} param0
 * @returns
 */
export default function StanzaImage({
  children,
  index,
  stanzaCount,
  animation,
  positionX,
  positionY,
  stanzaDuration,
}) {
  const oneIndexPercent = 100 / (stanzaCount + 2);

  return (
    <div>
      <style>{`
        #stanzaImage${index} {
          animation-name: stanza${animation ? animation : "fade"}${index};
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
        }

        #stanzaImage${index} img {
          height: 250px;
        }

        @keyframes stanzafade${index} {
          0% {
            opacity: 0;
          }
          ${
            index > 0
              ? `${(index - 0.5) * oneIndexPercent}% {
              opacity: 0;
            }`
              : ""
          }
          ${index * oneIndexPercent}% {
            opacity: 1;
          }
          ${(index + 0.5) * oneIndexPercent}% {
            opacity: 1;
          }
          ${(index + 1) * oneIndexPercent}% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
      <div
        id={`stanzaImage${index}`}
        className="ScrollAnimation-StanzaImage-Container"
        style={{
          right: { left: "45%", center: "25%", right: "5%" }[positionX],
          top: { top: "5%", center: "30%", bottom: "55%" }[positionY],
        }}
      >
        {children}
      </div>
    </div>
  );
}
