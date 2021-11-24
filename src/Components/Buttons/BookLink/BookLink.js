// @ts-check
import React from "react";
import "./BookLink.scss";
import { Link } from "react-router-dom";
import { randomElement } from "../../../utils/randomElement/randomElement";
import { getContrast } from "../../../utils/getContrast/getContrast";

const bookColors = ["green", "maroon", "purple"];

/**
 * @namespace BookLink
 * @function BookLink
 * @author Alexander Burdiss
 * @param {object} props
 * @param {string} props.link
 * @param {object} props.story
 * @param {string} [props.backgroundColor]
 * @since 10/16/21
 * @version 1.1.0
 * @component
 */
export default function BookLink({ link, story, backgroundColor }) {
  const bgColor = backgroundColor ? backgroundColor : randomElement(bookColors);

  return (
    <Link
      className={`BookLink-Container`}
      style={{ backgroundColor: bgColor }}
      to={link}
    >
      <div className="TitleContainer">
        <strong style={{ color: getContrast(bgColor) }}>{story.title}</strong>
      </div>
      <div style={{ color: getContrast(bgColor) }}>{story.field_author}</div>
    </Link>
  );
}
