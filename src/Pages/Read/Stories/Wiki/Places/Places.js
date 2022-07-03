import React from "react";
import { Link } from "react-router-dom";

import StandardWrapper from "../../../../../Components/Structural/StandardWrapper/StandardWrapper";
import PageTitle from "../../../../../Components/Structural/PageTitle/PageTitle";
import SEO from "../../../../../Components/Structural/SEO/SEO";

export default function Places() {
  return (
    <StandardWrapper>
      <SEO title="Places | The Wiki | The Bedtime Project" />
      <div className="Wiki-Page-Wrapper">
        <div className="inner-content">
          <PageTitle>Places</PageTitle>
          <div className="Links">
            <Link to={"/read/stories/wiki/places/isle-of-alto"}>
              Isle of Alto
            </Link>
            <Link to={"/read/stories/wiki/places/isle-of-cirro"}>
              Isle of Cirro
            </Link>
            <Link to={"/read/stories/wiki/places/isle-of-co"}>Isle of Co</Link>
            <Link to={"/read/stories/wiki/places/isle-of-greete"}>
              Isle of Greete
            </Link>
            <Link to={"/read/stories/wiki/places/isle-of-nimbo"}>
              Isle of Nimbo
            </Link>
            <Link to={"/read/stories/wiki/places/isle-of-strato"}>
              Isle of Strato
            </Link>
            <Link to={"/read/stories/wiki/places/isles-of-arcane"}>
              Isle of Arcane
            </Link>
            <Link to={"/read/stories/wiki/places/minterra"}>Minterra</Link>
            <Link to={"/read/stories/wiki/places/port-of-sky"}>
              Port of Sky
            </Link>
            <Link to={"/read/stories/wiki/places/sarren-isles"}>
              Sarren Isles
            </Link>
            <Link to={"/read/stories/wiki/places/stratosphairros"}>
              Stratosphairros
            </Link>
            <Link to={"/read/stories/wiki/places/the-dry-sea"}>
              The Dry Sea
            </Link>
          </div>
        </div>
      </div>
    </StandardWrapper>
  );
}
