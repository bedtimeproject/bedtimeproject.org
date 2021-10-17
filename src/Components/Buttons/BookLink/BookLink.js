import React from "react";
import "./BookLink.scss";
import { Link } from "react-router-dom";

/**
 * @namespace BookLink
 * @function BookLink
 * @author Alexander Burdiss
 * @since 10/16/21
 * @version 1.0.0
 * @component
 */
export default function BookLink({ link, story }) {
  return (
    <Link className="BookLink-Container" to={link}>
      <div className="TitleContainer">
        <strong>{story.title}</strong>
      </div>
      <div>{story.field_author}</div>
    </Link>
  );
}
