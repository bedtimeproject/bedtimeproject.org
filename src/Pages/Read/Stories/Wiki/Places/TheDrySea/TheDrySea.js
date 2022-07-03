import React from "react";

import StandardWrapper from "../../../../../../Components/Structural/StandardWrapper/StandardWrapper";
import PageTitle from "../../../../../../Components/Structural/PageTitle/PageTitle";
import SEO from "../../../../../../Components/Structural/SEO/SEO";

export default function TheDrySea() {
  return (
    <StandardWrapper>
      <SEO title="The Dry Sea | The Wiki | The Bedtime Project" />
      <div className="Wiki-Page-Wrapper">
        <div className="inner-content">
          <PageTitle>The Dry Sea</PageTitle>
        </div>
      </div>
    </StandardWrapper>
  );
}
