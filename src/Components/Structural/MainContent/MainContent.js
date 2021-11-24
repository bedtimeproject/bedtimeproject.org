// @ts-check
import React from "react";
import "./MainContent.scss";

/**
 * @namespace MainContent
 * @function MainContent
 * @author Alexander Burdiss
 * @since 10/15/21
 * @version 1.0.1
 * @component
 */
export default function MainContent({ children }) {
  return (
    <main className="AppContentContainer" id="mainContent" tabIndex={0}>
      {children}
    </main>
  );
}
