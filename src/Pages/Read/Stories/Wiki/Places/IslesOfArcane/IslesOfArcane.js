import React from "react";

import StandardWrapper from "../../../../../../Components/Structural/StandardWrapper/StandardWrapper";
import PageTitle from "../../../../../../Components/Structural/PageTitle/PageTitle";
import SEO from "../../../../../../Components/Structural/SEO/SEO";

export default function IslesOfArcane() {
  return (
    <StandardWrapper>
      <SEO title="Isles of Arcane | The Wiki | The Bedtime Project" />
      <div className="Wiki-Page-Wrapper">
        <div className="inner-content">
          <PageTitle>Isles of Arcane</PageTitle>
        </div>
      </div>
    </StandardWrapper>
  );
}
