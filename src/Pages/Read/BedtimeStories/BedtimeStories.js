// @ts-check
import React from "react";
import "./BedtimeStories.scss";

import BookLink from "../../../Components/Buttons/BookLink/BookLink";
import Bookshelf from "../../../Components/General/Bookshelf/Bookshelf";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import SEO from "../../../Components/Structural/SEO/SEO";

/**
 * @namespace BedtimeStories
 * @function BedtimeStories
 * @author Alexander Burdiss
 * @since 10/17/21
 * @version 2.0.0
 * @component
 */
export default function BedtimeStories() {
  const shelf1Books = [
    {
      title: "Mrs. Blue Sky",
      link: "/read/bedtime-stories/mrs-blue-sky",
      field_author: "C. A. Moonbloom",
      backgroundColor: "#133061",
    },
    {
      title: "The Lady and the Frog",
      link: "read/bedtime-stories/the-lady-and-the-frog",
      field_author: "Daniel Stigmon",
      backgroundColor: "#dab656",
    },
  ];
  return (
    <StandardWrapper>
      <div className="BedtimeStories-Container">
        <SEO title="Bedtime Stories" />
        <Bookshelf
          pageTitle="Bedtime Stories"
          books1={shelf1Books.map((book, index) => (
            <BookLink
              key={index}
              link={book.link}
              story={book}
              backgroundColor={book.backgroundColor}
            />
          ))}
          books2={null}
          books3={null}
        />
      </div>
    </StandardWrapper>
  );
}
