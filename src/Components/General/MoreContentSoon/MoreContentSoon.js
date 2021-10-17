import React from "react";
import { Link } from "react-router-dom";
import "./MoreContentSoon.scss";

/**
 * @namespace MoreContentSoon
 * @function MoreContentSoon
 * @author Alexander Burdiss
 * @since 10/16/21
 * @version 1.0.0
 * @component
 */
export default function MoreContentSoon({ backLink, backLinkText }) {
  return (
    <div className="MoreContentSoon-Container">
      <div>
        <strong>More Coming Soon!</strong>
      </div>
      {backLink && (
        <div className="Backlink">
          <Link to={backLink}>{backLinkText}</Link>
        </div>
      )}
    </div>
  );
}
