import React from "react";
import { Link } from "react-router-dom";

import newspaper from "./Newspaper.svg";

/**
 * @function DailyLimerickButton
 * @description A newspaper with text "Daily Limerick" across the front, that
 * when clicked, lead you to the latest limerick. This will be placed on the
 * front page so that users can easily access the daily limerick!
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 1.0.0
 */
export default function DailyLimerickButton() {
  return (
    <Link to="/stories/limericks/latest" className="DailyLimericksButton">
      <img
        className="DailyLimericksButton-Image"
        src={newspaper}
        alt={"Latest Limerick"}
      />
      <div className="DailyLimericksButton-Text">Daily&nbsp;Limerick!</div>
    </Link>
  );
}
