import React from "react";
import "./Checkerboard.scss";

/**
 * @function Checkerboard
 * @description A checkerboard pattern that is used as a background page for
 * the playground page on the site.
 * @author Alexander Burdiss
 * @since 6/10/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Checkerboard />
 * ```
 */
export default function Checkerboard({ primaryColor, secondaryColor }) {
  return (
    <div className="Checkerboard-Container">
      <style>{`
        .Checkerboard div {
          background: repeating-conic-gradient(
            ${primaryColor} 0deg 90deg, 
            ${secondaryColor} 0deg 180deg
          ) 
          0 
          0 /
          200px
          200px 
          round;
        }
      `}</style>
      <div className="Checkerboard">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
