import React from "react";
import "./StanzaImage.scss";

/**
 * @function stanzaImage
 * @description Displays One image for the stanza.
 * @param {*} param0
 * @returns
 */
export default function StanzaImage({ children, index, stanzaCount }) {
  const oneIndexPercent = 100 / (stanzaCount + 2);
  console.log(children);

  return (
    <div>
      <style>{`
        #stanzaImage${index} {
          animation-name: stanzaFade${index};
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
        }


        #stanzaImage${index} img {
          height: 200px;
        }

        @keyframes stanzaFade${index} {
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
      >
        {children}
      </div>
    </div>
  );
}
