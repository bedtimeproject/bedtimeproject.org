import React, { useContext } from "react";

import "./Tales.scss";

import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import BookLink from "../../../Components/Buttons/BookLink/BookLink";
import SEO from "../../../Components/Structural/SEO/SEO";
import Bookshelf from "../../../Components/General/Bookshelf/Bookshelf";

import { AppContext } from "../../../Contexts/AppContext";

/**
 * @function Tales
 * @description A collection of longer poems on the site
 * @author Alexander Burdiss
 * @since 6/15/21
 * @version 3.0.1
 * @component
 * @example
 * <Tales />
 */
export default function Tales() {
  const {
    state: { tales },
  } = useContext(AppContext);

  return (
    <StandardWrapper>
      <div className="Tales-Container">
        <SEO title="Tales" />
        <Bookshelf
          pageTitle="Tales"
          books1={tales?.map((story, index) => {
            if (index > 2) {
              return null;
            }

            return (
              <BookLink
                key={index}
                link={`/read/tales/${story.slug.current}`}
                story={story}
              />
            );
          })}
          books2={tales?.map((story, index) => {
            if (index <= 2 || index > 5) {
              return null;
            }

            const link = story.slug?.current;
            return (
              <BookLink
                key={index}
                link={`/read/tales/${link}`}
                story={story}
              />
            );
          })}
          books3={tales?.map((story, index) => {
            if (index <= 5 || index > 8) {
              return null;
            }

            const link = story.slug?.current;
            return (
              <BookLink
                key={index}
                link={`/read/tales/${link}`}
                story={story}
              />
            );
          })}
        />
      </div>
    </StandardWrapper>
  );
}
