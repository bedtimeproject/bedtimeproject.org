import React from "react";

import StandardWrapper from "../../../../../../Components/Structural/StandardWrapper/StandardWrapper";
import PageTitle from "../../../../../../Components/Structural/PageTitle/PageTitle";
import SEO from "../../../../../../Components/Structural/SEO/SEO";

export default function IsleOfNimbo() {
  return (
    <StandardWrapper>
      <SEO title="Isle of Nimbo | The Wiki | The Bedtime Project" />
      <div className="Wiki-Page-Wrapper">
        <div className="inner-content">
          <PageTitle>Isle of Nimbo</PageTitle>
        </div>
      </div>
    </StandardWrapper>
  );
}
