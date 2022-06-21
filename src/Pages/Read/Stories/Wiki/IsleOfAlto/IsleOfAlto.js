import React from "react";

import StandardWrapper from "../../../../../Components/Structural/StandardWrapper/StandardWrapper";
import PageTitle from "../../../../../Components/Structural/PageTitle/PageTitle";
import SEO from "../../../../../Components/Structural/SEO/SEO";

export default function IsleOfAlto() {
  return (
    <StandardWrapper>
      <SEO title="Isle Of Alto | The Wiki" />
      <div className="Wiki-Page-Wrapper">
        <div className="inner-content">
          <PageTitle>Isle Of Alto</PageTitle>
        </div>
      </div>
    </StandardWrapper>
  );
}
