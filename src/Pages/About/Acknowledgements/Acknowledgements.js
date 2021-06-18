import React from "react";
import "./Acknowledgements.scss";

import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

/**
 * @function Acknowledgements
 * @description A list of names of people who contributed, or peoples' work that
 * we used to help out in this project.
 * @author Alexander Burdiss
 * @since 6/10/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Acknowledgements />
 * ```
 */
export default function Acknowledgements() {
  return (
    <div className="Acknowledgements-Container">
      <PageTitle>Acknowledgements</PageTitle>
      <div>Hello, Acknowledgements!</div>
    </div>
  );
}
