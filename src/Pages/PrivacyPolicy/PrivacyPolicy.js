// @ts-check

import React from "react";
import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import "./PrivacyPolicy.scss";

/**
 * @namespace PrivacyPolicy
 * @function PrivacyPolicy
 * @author Alexander Burdiss
 * @since 11/08/21
 * @version 1.0.0
 * @component
 */
export default function PrivacyPolicy() {
  return (
    <StandardWrapper>
      <div className="PrivacyPolicy-Container">
        <PageTitle>Privacy Policy</PageTitle>
        <article>
          <h2>Data collection policies</h2>
          <p>Coming Soon!</p>
        </article>
      </div>
    </StandardWrapper>
  );
}
