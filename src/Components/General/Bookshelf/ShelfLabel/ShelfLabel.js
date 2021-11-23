//@ts-check
import React from "react";
import { Link } from "react-router-dom";
import "./ShelfLabel.scss";

/**
 * @namespace ShelfLabel
 * @function ShelfLabel
 * @author Alexander Burdiss
 * @since 11/01/21
 * @version 1.0.0
 * @component
 */
export default function ShelfLabel({ link, title }) {
  return (
    <div className="ShelfLabel-Container">
      <Link to={link}>{title}</Link>
    </div>
  );
}
