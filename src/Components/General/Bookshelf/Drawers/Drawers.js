import React from "react";
import { Link } from "react-router-dom";
import "./Drawers.scss";

/**
 * @namespace Drawers
 * @function Drawers
 * @author Alexander Burdiss
 * @since 11/01/21
 * @version 1.0.0
 * @component
 */
export default function Drawers({ label, href }) {
  return (
    <div class="Drawers-wrap">
      <h2>{label}</h2>
      <ul class="drawers">
        <Link class="drawer" to={href} aria-label={"Navigates to " + label}>
          <span class="handle"></span>
        </Link>
        <Link class="drawer" to={href} aria-label={"Navigates to " + label}>
          <span class="handle"></span>
        </Link>
        <Link
          class="drawer third"
          to={href}
          aria-label={"Navigates to " + label}
        >
          <span class="handle"></span>
        </Link>
      </ul>
    </div>
  );
}
