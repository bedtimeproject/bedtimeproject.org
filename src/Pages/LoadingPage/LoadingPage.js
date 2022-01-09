import React from "react";

import './LoadingPage.scss';

import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import LoadingIndicator from "../../Components/Structural/Loading/Loading";

/**
 * @namespace LoadingPage
 * @function LoadingPage
 * @description Displays the header and footer and a loading indicator in the
 * center of the viewport. Used as the loading indicator for a lazy-loaded page.
 * @author Alexander Burdiss
 * @since 1/9/22
 * @version 1.0.0
 */
export default function LoadingPage() {
  return (
    <StandardWrapper>
      <div className="LoadingPage-Container">
        <LoadingIndicator />
      </div>
    </StandardWrapper>
  );
}
