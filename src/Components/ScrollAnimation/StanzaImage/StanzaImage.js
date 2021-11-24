// @ts-check
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
import { longslideleft } from "./animations/longslideleft/longslideleft";
import { longslideright } from "./animations/longslideright/longslideright";

// Newport Nebraska
import AlaskaFlag from "../../../Pages/Read/BedtimeStories/NewportNebraska/images/AlaskaFlag.svg";
import CaliforniaFlag from "../../../Pages/Read/BedtimeStories/NewportNebraska/images/CaliforniaFlag.svg";
import CitySkyline from "../../../Pages/Read/BedtimeStories/NewportNebraska/images/CitySkyline.svg";
import Corn from "../../../Pages/Read/BedtimeStories/NewportNebraska/images/Corn.svg";
import Grass from "../../../Pages/Read/BedtimeStories/NewportNebraska/images/Grass.svg";
import Surfboard from "../../../Pages/Read/BedtimeStories/NewportNebraska/images/Surfboard.svg";
import Swimsuit from "../../../Pages/Read/BedtimeStories/NewportNebraska/images/Swimsuit.svg";
import Umbrella from "../../../Pages/Read/BedtimeStories/NewportNebraska/images/Umbrella.svg";
import WaveOutline from "../../../Pages/Read/BedtimeStories/NewportNebraska/images/WaveOutline.svg";

// Guide to Sunset
import BlueFlowers from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/BlueFlowers.svg";
import CaveEntrance from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/CaveEntrance.svg";
import CherryPie from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/CherryPie.svg";
import Constellation1 from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Constellation1.svg";
import Kite from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/BlueKite.svg";
import Ramen from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Ramen.svg";
import Town from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Town.svg";
import Treasure from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Treasure.svg";
import ActionBox from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/ActionBox.svg";
import Bed from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Bed.svg";
import Constellation2 from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Constellation2.svg";
import Constellation3 from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Constellation3.svg";
import FullMoon from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/FullMoon.svg";
import Mountains from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Mountains.svg";
import MountEverest from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Mount-Everest.svg";
import MusicNotes from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/MusicNotes.svg";
import Oak from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Oak.svg";
import Penny from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Penny.svg";
import PinkPoodle from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/PinkPoodle.svg";
import Shrub1 from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Shrub1.svg";
import Shrub2 from "../../../Pages/Read/BedtimeStories/TheGuideToSunset/images/Shrub2.svg";

// Mrs. Blue Sky
import Mountain from "../../../Pages/Read/BedtimeStories/MrsBlueSky/images/Mountain.svg";
import Sun from "../../../Pages/Read/BedtimeStories/MrsBlueSky/images/Sun.svg";

/**
 * @function stanzaImage
 * @description Displays One image for the stanza.
 * @param {object} props The JSX props passed to this React component
 * @param {React.Component|string} props.children The image to render inside this
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
 * @param {string} props.url A url to use for an external image.
 * @param {number} props.rotation The rotation of the image
 * @param {number} props.scale The amount to scale the image
 * @param {string} props.animationOverlap Whether the animations should overlap
 * with the previous and next animations
 * @param {number} props.stanzaDuration The number of stanzas that this image
 * should remain onscreen.
 * @author Alexander Burdiss
 * @since 7/10/21
 * @version 2.0.0
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
  url,
  rotation,
  scale,
  animationOverlap,
}) {
  const scaleValue = scale != undefined ? scale : 1;
  const rotationValue = scale != undefined ? rotation : 0;
  const oneIndexPercent = 100 / (stanzaCount + 2);

  return (
    <div>
      <style>{`
        #stanza${index}Image${imageIndex} {
          animation-name: stanza${index}${animation}${imageIndex};
          animation-duration: 1s;
          animation-timing-function: linear;
        }

        #stanza${index}Image${imageIndex} .Image {
          height: ${250 * scaleValue}px;
          transform: translateX(-${(250 * scaleValue) / 2}px) translateY(-${
        (250 * scaleValue) / 2
      }px) rotate(${rotationValue}deg);
        }

        ${
          animation === "fade"
            ? fade(
                index,
                imageIndex,
                stanzaDuration,
                oneIndexPercent,
                animationOverlap
              )
            : ""
        }

        ${
          animation === "slidedown"
            ? slidedown(
                index,
                imageIndex,
                stanzaDuration,
                oneIndexPercent,
                animationOverlap
              )
            : ""
        }

        ${
          animation === "slideup"
            ? slideup(
                index,
                imageIndex,
                stanzaDuration,
                oneIndexPercent,
                animationOverlap
              )
            : ""
        }

        ${
          animation === "slideleft"
            ? slideleft(
                index,
                imageIndex,
                stanzaDuration,
                oneIndexPercent,
                animationOverlap
              )
            : ""
        }

        ${
          animation === "slideright"
            ? slideright(
                index,
                imageIndex,
                stanzaDuration,
                oneIndexPercent,
                animationOverlap
              )
            : ""
        }

        ${
          animation === "slidedownleft"
            ? slidedownleft(
                index,
                imageIndex,
                stanzaDuration,
                oneIndexPercent,
                animationOverlap
              )
            : ""
        }

        ${
          animation === "slidedownright"
            ? slidedownright(
                index,
                imageIndex,
                stanzaDuration,
                oneIndexPercent,
                animationOverlap
              )
            : ""
        }

        ${
          animation === "slideupleft"
            ? slideupleft(
                index,
                imageIndex,
                stanzaDuration,
                oneIndexPercent,
                animationOverlap
              )
            : ""
        }

        ${
          animation === "slideupright"
            ? slideupright(
                index,
                imageIndex,
                stanzaDuration,
                oneIndexPercent,
                animationOverlap
              )
            : ""
        }

        ${
          animation === "longslideleft"
            ? longslideleft(
                index,
                imageIndex,
                stanzaDuration,
                oneIndexPercent,
                animationOverlap
              )
            : ""
        }

        ${
          animation === "longslideright"
            ? longslideright(
                index,
                imageIndex,
                stanzaDuration,
                oneIndexPercent,
                animationOverlap
              )
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
        {children === "url" ? (
          <img src={url} alt={""} />
        ) : (
          <img
            src={
              {
                // Newport Nebraska
                "Alaska Flag": AlaskaFlag,
                "California Flag": CaliforniaFlag,
                "City Skyline": CitySkyline,
                Corn: Corn,
                Grass: Grass,
                Surfboard: Surfboard,
                Swimsuit: Swimsuit,
                Umbrella: Umbrella,
                "Wave Outline": WaveOutline,
                // Guide to Sunset
                "Blue Flowers": BlueFlowers,
                "Cave Entrance": CaveEntrance,
                "Cherry Pie": CherryPie,
                "Constellation 1": Constellation1,
                Kite: Kite,
                Ramen: Ramen,
                Town: Town,
                Treasure: Treasure,
                "Action Box": ActionBox,
                Bed: Bed,
                "Constellation 2": Constellation2,
                "Constellation 3": Constellation3,
                "Full Moon": FullMoon,
                Mountains: Mountains,
                "Mount Everest": MountEverest,
                "Music Notes": MusicNotes,
                Oak: Oak,
                Penny: Penny,
                "Pink Poodle": PinkPoodle,
                "Shrub 1": Shrub1,
                "Shrub 2": Shrub2,
                // Mrs. Blue Sky
                Mountain: Mountain,
                Sun: Sun,
              }[children]
            }
            alt={""}
          />
        )}
      </div>
    </div>
  );
}
