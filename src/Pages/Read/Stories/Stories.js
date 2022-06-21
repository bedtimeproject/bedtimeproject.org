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
          books1={[
            <BookLink
              link={"/read/stories/wiki"}
              story={{
                title: "The Wiki",
                author: "C. A. Moonbloom and Calcius Caldwell",
              }}
              backgroundColor={"#88d9d7"}
            />,
            ...stories.map((story, index) => {
              if (index > 1) {
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
          books2={stories?.map((story, index) => {
            if (index <= 1 || index > 4) {
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
            if (index <= 4 || index > 7) {
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
