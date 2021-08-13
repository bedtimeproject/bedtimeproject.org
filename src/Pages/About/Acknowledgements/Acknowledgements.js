import { Helmet } from "react-helmet";
import React from "react";

import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import acknowledgementsListData from "./acknowledgementsListData";

import "./Acknowledgements.scss";
import AcknowledgementListItem from "./AcknowledgementListItem/AcknowledgementListItem";

/**
 * @function Acknowledgements
 * @description A list of names of people who contributed, or peoples' work that
 * we used to help out in this project.
 * @author Alexander Burdiss
 * @since 6/10/21
 * @version 1.1.0
 * @component
 * @example
 * ```jsx
 * <Acknowledgements />
 * ```
 */
export default function Acknowledgements() {
  return (
    <div className="Acknowledgements-Container">
      <Helmet>
        <title>Acknowledgements | The Bedtime Project</title>
      </Helmet>
      <PageTitle>Acknowledgements</PageTitle>
      <div className="Acknowledgements-List">
        {acknowledgementsListData.map((item, key) => {
          return (
            <AcknowledgementListItem
              name={item.name}
              contribution={item.contribution}
            />
          );
        })}
      </div>
    </div>
  );
}
