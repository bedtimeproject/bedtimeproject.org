import React from "react";
import "./RepeatingRadialGradient.scss";

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
