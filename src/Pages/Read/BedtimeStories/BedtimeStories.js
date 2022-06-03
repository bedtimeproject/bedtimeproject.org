import React from "react";
import "./BedtimeStories.scss";

import BookLink from "../../../Components/Buttons/BookLink/BookLink";
import Bookshelf from "../../../Components/General/Bookshelf/Bookshelf";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import SEO from "../../../Components/Structural/SEO/SEO";

import { bedtimeStories } from "../Read";

/**
 * @namespace BedtimeStories
 * @function BedtimeStories
 * @author Alexander Burdiss
 * @since 10/17/21
 * @version 2.0.0
 * @component
 */
export default function BedtimeStories() {
  return (
    <StandardWrapper>
      <div className="BedtimeStories-Container">
        <SEO title="Bedtime Stories" />
        <Bookshelf
          pageTitle="Bedtime Stories"
          books1={bedtimeStories.map((book, index) => {
            if (index > 2) {
              return null;
            }

            return (
              <BookLink
                key={index}
                link={book.link}
                story={book}
                backgroundColor={book.backgroundColor}
              />
            );
          })}
          books2={bedtimeStories.map((book, index) => {
            if (index <= 2 || index > 5) {
              return null;
            }

            return (
              <BookLink
                key={index}
                link={book.link}
                story={book}
                backgroundColor={book.backgroundColor}
              />
            );
          })}
          books3={bedtimeStories.map((book, index) => {
            if (index <= 5 || index > 8) {
              return null;
            }

            return (
              <BookLink
                key={index}
                link={book.link}
                story={book}
                backgroundColor={book.backgroundColor}
              />
            );
          })}
        />
      </div>
    </StandardWrapper>
  );
}
