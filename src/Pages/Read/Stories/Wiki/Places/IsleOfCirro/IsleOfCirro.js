import React from "react";

import StandardWrapper from "../../../../../../Components/Structural/StandardWrapper/StandardWrapper";
import PageTitle from "../../../../../../Components/Structural/PageTitle/PageTitle";
import SEO from "../../../../../../Components/Structural/SEO/SEO";

export default function IsleOfCirro() {
  return (
    <StandardWrapper>
      <SEO title="Isle of Cirro | The Wiki | The Bedtime Project" />
      <div className="Wiki-Page-Wrapper">
        <div className="inner-content">
          <PageTitle>Isle of Cirro</PageTitle>
        </div>
      </div>
    </StandardWrapper>
  );
}
