import React from "react";
import { Link } from "react-router-dom";

/**
 * @function QuipButton
 * @description A styled button that takes you to a limerick.
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.0.0
 * @param props The JSX props passed to this React component
 * @param {String} props.children The text to render in this component
 * @param {String} props.link The link to route to when this component is
 * pressed
 */
export default function QuipButton({ children, link }) {
  return (
    <Link to={link} className="LimerickButton-Container">
      <div>{children}</div>
    </Link>
  );
}
