import React from "react";
import "./Loading.scss";

/**
 * @function Loading
 * @component
 * @description A fun loading spinner
 * Created 11/05/21
 * Re-wrote to new design (book) 7/12/23
 * @returns {JSX.Element} JSX render instructions
 * @see https://codepen.io/jkantner/pen/mdMydQO
 *
 * @copyright 2023 The Bedtime Project
 * @author Alexander Burdiss
 * @since 7/12/23
 * @version 2.0.0
 */
export default function Loading() {
  return (
    <div
      className="Loading-Container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div class="book">
        <div class="book__pg-shadow"></div>
        <div class="book__pg"></div>
        <div class="book__pg book__pg--2"></div>
        <div class="book__pg book__pg--3"></div>
        <div class="book__pg book__pg--4"></div>
        <div class="book__pg book__pg--5"></div>
      </div>
    </div>
  );
}
