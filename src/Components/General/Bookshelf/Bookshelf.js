import React from "react";
import "./Bookshelf.scss";

import RainyWindow from "../RainyWindow/RainyWindow";

/**
 * @namespace Bookshelf
 * @function Bookshelf
 * @author Alexander Burdiss
 * @since 10/17/21
 * @version 1.0.0
 * @component
 */
export default function Bookshelf({ books, pageTitle }) {
  return (
    <div className="Bookshelf-Container">
      <div className="RainyWindowLeft RainyWindow">
        <RainyWindow />
      </div>
      <div className="BooksContainer">
        {pageTitle && (
          <h1 className="Bookshelf-Page-Title">{pageTitle.toUpperCase()}</h1>
        )}
        <div className="Row">
          {books}
          <div className="Shelf"></div>
        </div>
      </div>
      <div className="RainyWindowRight RainyWindow">
        <RainyWindow right />
      </div>
    </div>
  );
}
