import React from "react";
import { Link } from "react-router-dom";

import "./DailyLimerickButton.css";

import newspaper from "./Newspaper.svg";

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
