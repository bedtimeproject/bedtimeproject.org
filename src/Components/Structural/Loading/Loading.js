import React from "react";
import "./Loading.scss";

/**
 * @namespace Loading
 * @function Loading
 * @author Alexander Burdiss
 * @since 11/05/21
 * @version 1.0.0
 * @component
 * @see https://codepen.io/Keyamoon/pen/aHxuq
 */
export default function Loading({ color = "#9679cd" }) {
  return (
    <div className="Loading-Container">
      <style>{`
        .Loading-Container .loading:after {
          box-shadow: ${color} 1.5em 0 0 0, ${color} 1.1em 1.1em 0 0,
          ${color} 0 1.5em 0 0, ${color} -1.1em 1.1em 0 0,
          ${color} -1.5em 0 0 0, ${color} -1.1em -1.1em 0 0,
          ${color} 0 -1.5em 0 0, ${color} 1.1em -1.1em 0 0;
        }
      `}</style>
      <div className="loading">Loading&#8230;</div>
    </div>
  );
}
