// @ts-check
import React, { useState, useEffect } from "react";

import "./Read.scss";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import SEO from "../../Components/Structural/SEO/SEO";
import Bookshelf from "../../Components/General/Bookshelf/Bookshelf";
import BookLink from "../../Components/Buttons/BookLink/BookLink";
import { formatUrlString } from "../../utils/formatUrlString/formatUrlString";

export const bedtimeStories = [
  {
    title: "Mrs. Blue Sky",
    link: "/read/bedtime-stories/mrs-blue-sky",
    field_author: "C. A. Moonbloom",
    backgroundColor: "#133061",
  },
];

/**
 * @function Read
 * @description The main navigational element for items that people can
 * go to read.
 * @author Alexander Burdiss
 * @since 7/20/21
 * @version 2.0.2
 * @component
 * @example
 * <Read />
 */
export default function Read() {
  const [shelf2Books, setShelf2Books] = useState([]);
  const [shelf3Books, setShelf3Books] = useState([]);

  function fetchStories() {
    fetch("https://drupal.bedtimeproject.dev/rest/views/stories/read")
      .then((resp) => resp.json())
      .then((data) => setShelf2Books(data));
  }

  function fetchTales() {
    fetch("https://drupal.bedtimeproject.dev/rest/views/tales/read")
      .then((resp) => resp.json())
      .then((data) => setShelf3Books(data));
  }

  useEffect(() => {
    fetchStories();
    fetchTales();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StandardWrapper>
      <SEO title="Read" />
      <Bookshelf
        pageTitle="Read"
        drawerHref="/read/quips"
        drawerLabel="Quips"
        books1={bedtimeStories.map(function (book, index) {
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
        shelf1Link="/read/bedtime-stories"
        shelf1Label="Bedtime Stories"
        books2={shelf2Books.map((story, index) => {
          const link = formatUrlString(story.title);
          return (
            <BookLink
              key={index}
              link={`/read/stories/${link}`}
              story={story}
            />
          );
        })}
        shelf2Link="/read/stories"
        shelf2Label="Stories"
        books3={shelf3Books.map((story, index) => {
          const link = formatUrlString(story.title);
          return (
            <BookLink key={index} link={`/read/tales/${link}`} story={story} />
          );
        })}
        shelf3Link="/read/tales"
        shelf3Label="Tales"
      />
    </StandardWrapper>
  );
}
