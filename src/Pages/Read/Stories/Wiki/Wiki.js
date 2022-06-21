import React from "react";
import { Link } from "react-router-dom";

import "./Wiki.scss";

import StandardWrapper from "../../../../Components/Structural/StandardWrapper/StandardWrapper";
import SEO from "../../../../Components/Structural/SEO/SEO";
import PageTitle from "../../../../Components/Structural/PageTitle/PageTitle";

export default function Wiki() {
  return (
    <StandardWrapper>
      <SEO title="The Wiki" />
      <div className="Wiki-Page-Wrapper">
        <article className="inner-content">
          <PageTitle>The Wiki</PageTitle>
          <div>The wiki is currently under construction!</div>
          <h2>Places</h2>
          <div className="Links">
            <Link to={"/Read/Stories/Wiki/isle-of-alto"}>Isle of Alto</Link>
            {/* 
               Isle of Co
               Isle of Greete
               Sarren Isles
               Isle of Cirro
               Isles of Arcane
               Port of Sky
               Isle of Strato
               Stratosphairros
               The Dry Sea
               Minterra
               Isle of Nimbo
             */}
          </div>
          <h2>People</h2>
          <p>Coming Soon!</p>
          <h2>Culinary Delights</h2>
          <p>Coming Soon!</p>
          <h2>Lore</h2>
          <p>Coming Soon!</p>
          <h2>Clouds</h2>
          <p>Coming Soon!</p>
        </article>
      </div>
    </StandardWrapper>
  );
}
