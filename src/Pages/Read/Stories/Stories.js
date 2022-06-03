import React, { useContext } from "react";

import "./Stories.scss";

import SEO from "../../../Components/Structural/SEO/SEO";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import BookLink from "../../../Components/Buttons/BookLink/BookLink";
import Bookshelf from "../../../Components/General/Bookshelf/Bookshelf";

import { AppContext } from "../../../Contexts/AppContext";

/**
 * @function Stories
 * @description The parent component that handles much of the navigation for the
 * stories tab screens. This component also provides a wrapper with padding used
 * on this stack only
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 2.0.0
 * @component
 * @example
 * <Stories />
 */
export default function Stories() {
  const {
    state: { stories },
  } = useContext(AppContext);

  return (
    <StandardWrapper>
      <div className="Stories-Container">
        <SEO title="Stories" />
        <Bookshelf
          pageTitle="Stories"
          books1={stories?.map((story, index) => {
            if (index > 2) {
              return null;
            }

            return (
              <BookLink
                key={index}
                link={`/read/stories/${story.slug.current}`}
                story={story}
              />
            );
          })}
          books2={stories?.map((story, index) => {
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
          books3={stories?.map((story, index) => {
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
