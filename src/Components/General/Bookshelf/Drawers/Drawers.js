// @ts-check
import React from "react";
import { Link } from "react-router-dom";
import "./Drawers.scss";

/**
 * @namespace Drawers
 * @function Drawers
 * @author Alexander Burdiss
 * @since 11/01/21
 * @lastModified 11/22/21
 * @version 1.0.1
 * @component
 */
export default function Drawers({ label, href }) {
  return (
    <div className="Drawers-wrap">
      <h2>{label}</h2>
      <ul className="drawers">
        <Link className="drawer" to={href} aria-label={"Navigates to " + label}>
          <span className="handle"></span>
        </Link>
        <Link className="drawer" to={href} aria-label={"Navigates to " + label}>
          <span className="handle"></span>
        </Link>
        <Link
          className="drawer third"
          to={href}
          aria-label={"Navigates to " + label}
        >
          <span className="handle"></span>
        </Link>
      </ul>
    </div>
  );
}
