// @ts-check
import React from "react";
import { Link } from "react-router-dom";
import "./DailyPoemButton.scss";

import newspaper from "./Newspaper.svg";

/**
 * @function DailyPoemButton
 * @description A newspaper with text "Daily Limerick" across the front, that
 * when clicked, lead you to the latest limerick. This will be placed on the
 * front page so that users can easily access the daily limerick!
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 1.0.1
 */
export default function DailyPoemButton() {
  return (
    <div className="DailyPoemButton">
      <Link to="/read/quips/latest">
        <img
          className="DailyPoemButton-Image"
          src={newspaper}
          alt={"Latest Limerick"}
        />
        <div className="DailyPoemButton-Text">Daily&nbsp;Poem!</div>
      </Link>
    </div>
  );
}
