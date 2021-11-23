// @ts-check
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderButton.scss";

/**
 * @function HeaderButton
 * @description A styled button in the header that takes care of the navigation
 * aspects, requiring text and a link.
 * @param {object} props The JSX props passed to this React component
 * @param {String} props.children The text to render in this button
 * @param {String} props.link The path that this button will lead the user to
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.0.0
 */
export default function HeaderButton({ children, link }) {
  return (
    <Link to={link} className="HeaderButtonContainer">
      <div className="HeaderButton">{children}</div>
    </Link>
  );
}
