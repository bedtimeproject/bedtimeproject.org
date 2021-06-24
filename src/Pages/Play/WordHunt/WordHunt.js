import { Helmet } from "react-helmet";
import React from "react";

import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

import "./WordHunt.scss";

export default function WordHunt() {
  return (
    <div className="WordHunt-Container">
      <Helmet>
        <title>Word Hunt | The Bedtime Project</title>
      </Helmet>
      <PageTitle>Word Hunt</PageTitle>
    </div>
  );
}
