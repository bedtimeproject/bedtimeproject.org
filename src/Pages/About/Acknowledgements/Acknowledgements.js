import { Helmet } from "react-helmet";
import React from "react";

import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import acknowledgementsListData from "./acknowledgementsListData";

import "./Acknowledgements.scss";
import HeaderDescription from "../../../Components/General/HeaderDescription/HeaderDescription";
import RepeatingRadialGradient from "../../../Components/Background/RepeatingRadialGradient/RepeatingRadialGradient";

/**
 * @function Acknowledgements
 * @description A list of names of people who contributed, or peoples' work that
 * we used to help out in this project.
 * @author Alexander Burdiss
 * @since 6/10/21
 * @version 1.1.1
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
      <RepeatingRadialGradient
        primaryColor={"#f3f6f6"}
        secondaryColor={"#c5ece3"}
        tertiaryColor={"#56d1b3"}
      />
      <PageTitle>Acknowledgements</PageTitle>
      <div className="Acknowledgements-List">
        {acknowledgementsListData.map((item, key) => {
          return (
            <HeaderDescription
              key={key}
              name={item.name}
              contribution={item.contribution}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}
