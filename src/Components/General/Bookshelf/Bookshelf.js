import React from "react";
import "./Bookshelf.scss";

import RainyWindow from "../RainyWindow/RainyWindow";
import ShelfLabel from "./ShelfLabel/ShelfLabel";
import Drawers from "./Drawers/Drawers";

/**
 * @namespace Bookshelf
 * @function Bookshelf
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
  scrollable,
  drawerHref,
  drawerLabel,
  shelf1Link,
  shelf1Label,
  shelf2Link,
  shelf2Label,
  shelf3Link,
  shelf3Label,
}) {
  return (
    <div className="Bookshelf-Container">
      <div className="RainyWindowLeft RainyWindow">
        <RainyWindow />
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
        <RainyWindow right />
      </div>
    </div>
  );
}
