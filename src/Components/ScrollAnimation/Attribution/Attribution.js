import React from "react";
import { getContrast } from "../../../util/getContrast/getContrast";

/**
 * @function Attribution
 * @description The final slide of text on a scroll animation
 * @author Alexander Burdiss
 * @since 6/5/21
 * @version 1.1.0
 * @param props The JSX props passed to this React component
 * @param {React.Component} props.children The text to render on this component
 * @param {String} props.background The background to render on this component
 */
export default function Attribution({ children, background }) {
  return (
    <div
      className="ScrollAnimation-Attribution-Container"
      style={{ backgroundColor: background }}
    >
      <div
        className="ScrollAnimation-Attribution-Border"
        style={{
          color: getContrast(background),
        }}
      >
        {children}
      </div>
    </div>
  );
}
