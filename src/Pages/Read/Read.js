import React, { useContext } from "react";

import "./Read.scss";

import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import SEO from "../../Components/Structural/SEO/SEO";
import Bookshelf from "../../Components/General/Bookshelf/Bookshelf";
import BookLink from "../../Components/Buttons/BookLink/BookLink";

import { AppContext } from "../../Contexts/AppContext";

export const bedtimeStories = [
  {
    title: "Surfer's Hideaway",
    link: "/read/bedtime-stories/surfers-hideaway",
    author: "C. A. Moonbloom",
    backgroundColor: "#fb8e49",
  },
  {
    title: "Mrs. Blue Sky",
    link: "/read/bedtime-stories/mrs-blue-sky",
    author: "C. A. Moonbloom",
    backgroundColor: "#133061",
  },
];

/**
 * @function Read
 * @description The main navigational element for items that people can
 * go to read.
 * @author Alexander Burdiss
 * @since 7/20/21
 * @version 3.0.0
 * @component
 * @example
 * <Read />
 */
export default function Read() {
  const {
    state: { tales, stories },
  } = useContext(AppContext);

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
        books2={[
          // <BookLink
          //   link={"/read/stories/wiki"}
          //   story={{
          //     title: "The Wiki",
          //     author: "C. A. Moonbloom and Calcius Caldwell",
          //   }}
          //   backgroundColor={"#88d9d7"}
          // />,
          ...stories.map((story, index) => {
            if (index > 2) {
              return null;
            }
            const link = story.slug?.current;
            return (
              <BookLink
                key={index}
                link={`/read/stories/${link}`}
                story={story}
              />
            );
          }),
        ]}
        shelf2Link="/read/stories"
        shelf2Label="Stories"
        books3={tales.map((tale, index) => {
          if (index > 2) {
            return null;
          }
          const link = tale.slug?.current;
          return (
            <BookLink key={index} link={`/read/tales/${link}`} story={tale} />
          );
        })}
        shelf3Link="/read/tales"
        shelf3Label="Tales"
      />
    </StandardWrapper>
  );
}
