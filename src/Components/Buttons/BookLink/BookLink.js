import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Styles
import "./BookLink.scss";

// Utils
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
 * @version 1.1.1
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
        <strong style={{ color: getContrast(bgColor) }}>{story?.title}</strong>
      </div>
      <div style={{ color: getContrast(bgColor) }}>{story?.author}</div>
    </Link>
  );
}

BookLink.propTypes = {
  link: PropTypes.string,
  story: PropTypes.object,
  backgroundColor: PropTypes.string,
};
