import React from "react";
import "./SkipLink.scss";

/**
 * @namespace SkipLink
 * @function SkipLink
 * @author Alexander Burdiss
 * @since 10/14/21
 * @version 1.0.0
 * @component
 */
export default function SkipLink() {
  function sendFocusToMainContent() {
    const mainContentId = "#mainContent";
    const main = document.querySelector(mainContentId);
    main.focus();
  }
  return (
    <button className="SkipLink-Container" onClick={sendFocusToMainContent}>
      Skip to main content
    </button>
  );
}
