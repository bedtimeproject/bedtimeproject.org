import React from "react";

import StandardWrapper from "../../../../../../Components/Structural/StandardWrapper/StandardWrapper";
import PageTitle from "../../../../../../Components/Structural/PageTitle/PageTitle";
import SEO from "../../../../../../Components/Structural/SEO/SEO";

export default function SarrenIsles() {
  return (
    <StandardWrapper>
      <SEO title="Sarren Isles | The Wiki | The Bedtime Project" />
      <div className="Wiki-Page-Wrapper">
        <div className="inner-content">
          <PageTitle>Sarren Isles</PageTitle>
        </div>
      </div>
    </StandardWrapper>
  );
}
