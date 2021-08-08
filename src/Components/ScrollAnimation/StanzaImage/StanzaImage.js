import React from "react";

import "./StanzaImage.scss";

// Animations
import { fade } from "./animations/fade/fade";
import { slidedown } from "./animations/slidedown/slidedown";
import { slideup } from "./animations/slideup/slideup";
import { slideleft } from "./animations/slideleft/slideleft";
import { slideright } from "./animations/slideright/slideright";
import { slidedownleft } from "./animations/slidedownleft/slidedownleft";
import { slidedownright } from "./animations/slidedownright/slidedownright";
import { slideupleft } from "./animations/slideupleft/slideupleft";
import { slideupright } from "./animations/slideupright/slideupright";

/**
 * @function stanzaImage
 * @description Displays One image for the stanza.
 * @param props The JSX props passed to this React component
 * @param {React.Component} props.children The image to render inside this
 * stanza.
 * @param {number} props.index The stanza index that this image is being
 * rendered with
 * @param {number} props.imageIndex The image index for the given stanza
 * @param {number} props.stanzaCount The number of Stanzas in this total
 * animation
 * @param {string} [props.animation='fade'] The animation type that will be
 * displayed on this component. Available animations are:
 * 'fade', 'slidedown', 'slideup', 'slideleft', 'slideright', 'slidedownleft',
 * 'slidedownright', 'slideupleft', 'slideupright'
 * @param {string} props.positionX The horizontal position of the image
 * relative to the rest of the scroll animation. Available positions are:
 * 'left', 'center', 'right'
 * @param {string} props.positionY The vertical position of the image relative
 * to the rest of the scroll animation. Available positions are:
 * 'top', 'center', 'bottom'
 * @param {number} props.stanzaDuration The number of stanzas that this image
 * should remain onscreen.
 * @author Alexander Burdiss
 * @since 7/10/21
 * @version 1.0.0
 */
export default function StanzaImage({
  children,
  index,
  imageIndex,
  stanzaCount,
  animation = "fade",
  positionX,
  positionY,
  stanzaDuration,
}) {
  const oneIndexPercent = 100 / (stanzaCount + 2);

  return (
    <div>
      <style>{`
        #stanza${index}Image${imageIndex} {
          animation-name: stanza${index}${animation}${imageIndex};
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
        }

        #stanza${index}Image${imageIndex} img {
          height: 250px;
        }

        ${
          animation === "fade"
            ? fade(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slidedown"
            ? slidedown(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slideup"
            ? slideup(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slideleft"
            ? slideleft(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slideright"
            ? slideright(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slidedownleft"
            ? slidedownleft(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slidedownright"
            ? slidedownright(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slideupleft"
            ? slideupleft(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slideupright"
            ? slideupright(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }
      `}</style>
      <div
        id={`stanza${index}Image${imageIndex}`}
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
