import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

/**
 * @function Breadcrumb
 * @description A stylized breadcrumb link to render on the site.
 * @param props The JSX props passed to this React component
 * @param {String} props.children The text to render on this breadcrumb
 * @param {String} props.link The path to route to when this breadcrumb is
 * clicked
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Breadcrumb link="/">Home</Breadcrumb>
 * ```
 */
export default function Breadcrumb({ children, link }) {
  return (
    <Link to={link} className="Breadcrumb-Container">
      <span>{children}</span>
    </Link>
  );
}
