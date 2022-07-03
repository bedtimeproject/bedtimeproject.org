import React from "react";

import StandardWrapper from "../../../../../../Components/Structural/StandardWrapper/StandardWrapper";
import PageTitle from "../../../../../../Components/Structural/PageTitle/PageTitle";
import SEO from "../../../../../../Components/Structural/SEO/SEO";

export default function PortOfSky() {
  return (
    <StandardWrapper>
      <SEO title="Port of Sky | The Wiki | The Bedtime Project" />
      <div className="Wiki-Page-Wrapper">
        <div className="inner-content">
          <PageTitle>Port of Sky</PageTitle>
        </div>
      </div>
    </StandardWrapper>
  );
}
