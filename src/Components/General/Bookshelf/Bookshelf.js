import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Bookshelf.scss";

import RainyWindow from "../RainyWindow/RainyWindow";
import ShelfLabel from "./ShelfLabel/ShelfLabel";
import Drawers from "./Drawers/Drawers";
import { getWeather } from "../../../utils/getWeather/getWeather";

/**
 * @namespace Bookshelf
 * @function Bookshelf
 * @param {object} props
 * @param {object[]} [props.books1]
 * @param {object[]} [props.books2]
 * @param {object[]} [props.books3]
 * @param {string} [props.pageTitle]
 * @param {string} [props.drawerHref]
 * @param {string} [props.drawerLabel]
 * @param {string} [props.shelf1Link]
 * @param {string} [props.shelf1Label]
 * @param {string} [props.shelf2Link]
 * @param {string} [props.shelf2Label]
 * @param {string} [props.shelf3Link]
 * @param {string} [props.shelf3Label]
 * @author Alexander Burdiss
 * @since 10/17/21
 * @version 1.1.0
 * @component
 */
export default function Bookshelf({
  books1,
  books2,
  books3,
  pageTitle,
  drawerHref,
  drawerLabel,
  shelf1Link,
  shelf1Label,
  shelf2Link,
  shelf2Label,
  shelf3Link,
  shelf3Label,
}) {
  const [weather, setWeather] = useState("rain");
  useEffect(function setup() {
    setWeather(getWeather());
  }, []);
  return (
    <div className="Bookshelf-Container">
      <div className="RainyWindowLeft RainyWindow">
        <RainyWindow weather={weather} />
      </div>
      <div className="BooksContainer">
        {pageTitle && (
          <h1 className="Bookshelf-Page-Title">{pageTitle.toUpperCase()}</h1>
        )}
        {shelf1Label && <ShelfLabel title={shelf1Label} link={shelf1Link} />}
        <div className="Row">
          {books1}
          <div className="Shelf"></div>
        </div>
        {shelf2Label && <ShelfLabel title={shelf2Label} link={shelf2Link} />}
        <div className="Row">
          {books2}
          <div className="Shelf"></div>
        </div>
        {shelf3Label && <ShelfLabel title={shelf3Label} link={shelf3Link} />}
        <div className="Row">
          {books3}
          <div className="Shelf"></div>
        </div>
        {drawerHref && <Drawers href={drawerHref} label={drawerLabel} />}
      </div>
      <div className="RainyWindowRight RainyWindow">
        <RainyWindow right weather={weather} />
      </div>
    </div>
  );
}

Bookshelf.propTypes = {
  books1: PropTypes.arrayOf(PropTypes.object),
  books2: PropTypes.arrayOf(PropTypes.object),
  books3: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string,
  drawerHref: PropTypes.string,
  drawerLabel: PropTypes.string,
  shelf1Link: PropTypes.string,
  shelf1Label: PropTypes.string,
  shelf2Link: PropTypes.string,
  shelf2Label: PropTypes.string,
  shelf3Link: PropTypes.string,
  shelf3Label: PropTypes.string,
};
