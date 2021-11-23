// @ts-check
import React from "react";
import "./RepeatingRadialGradient.scss";

/**
 * @namespace RepeatingRadialGradient
 * @function RepeatingRadialGradient
 * @param {object} props
 * @param {string} props.primaryColor
 * @param {string} props.secondaryColor
 * @param {string} props.tertiaryColor
 * @component
 * @author Alexander Burdiss
 * @since 8/21/21
 * @version 1.0.0
 */
export default function RepeatingRadialGradient({
  primaryColor,
  secondaryColor,
  tertiaryColor,
}) {
  return (
    <>
      <style>{`
      .AppContentContainer {
        position: relative;
      }
    #repeatingRadialGradient {
      background: repeating-radial-gradient(
        circle at 0 0,
        transparent 0,
        ${primaryColor} 50px
        ),
        repeating-linear-gradient(${secondaryColor}, ${tertiaryColor});
      }
      `}</style>
      <div id="repeatingRadialGradient"></div>
    </>
  );
}
