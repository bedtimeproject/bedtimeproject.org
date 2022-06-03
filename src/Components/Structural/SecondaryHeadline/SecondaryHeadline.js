import React from "react";
import "./SecondaryHeadline.scss";

/**
 * @namespace SecondaryHeadline
 * @function SecondaryHeadline
 * @author Alexander Burdiss
 * @param {Object} props The JSX props passed to this React component
 * @param {string} props.children The text to render inside a styled h2 for the
 * site.
 * @since 11/11/21
 * @version 1.0.0
 * @component
 */
export default function SecondaryHeadline({ children }) {
  return <h2 className="SecondaryHeadline-Container">{children}</h2>;
}
