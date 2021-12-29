// @ts-check
import React from "react";
import "./Fireworks.scss";

/**
 * @namespace Fireworks
 * @function Fireworks
 * @author Alexander Burdiss
 * @since 12/28/21
 * @version 1.0.0
 * @param {object} props The JSX props passed to this React component
 * @param {boolean} [props.window] Whether or not this should be rendered in
 * a window with smaller width.
 * @component
 */
export default function Fireworks({ window }) {
  return (
    <div className={`Fireworks-Container ${window ? "Window" : ""}`}>
      <div className="fire" />
      <div className="fire" />
      <div className="fire" />
      <div className="fire" />
      <div className="fire" />
      <div className="fire" />
      <div className="fire" />
      <div className="fire" />
    </div>
  );
}
