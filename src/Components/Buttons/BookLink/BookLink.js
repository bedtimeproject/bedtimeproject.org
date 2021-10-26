import React from "react";
import "./BookLink.scss";
import { Link } from "react-router-dom";
import { randomElement } from "../../../utils/randomElement/randomElement";

const bookColors = ["Green", "Red", "Purple"];

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
    <Link
      className={`BookLink-Container ${randomElement(bookColors)}`}
      to={link}
    >
      <div className="TitleContainer">
        <strong>{story.title}</strong>
      </div>
      <div>{story.field_author}</div>
    </Link>
  );
}
