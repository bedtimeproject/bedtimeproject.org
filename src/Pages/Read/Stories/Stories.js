import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import SEO from "../../../Components/Structural/SEO/SEO";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import BookLink from "../../../Components/Buttons/BookLink/BookLink";
import Bookshelf from "../../../Components/General/Bookshelf/Bookshelf";

import Story from "./Story/Story";

import "./Stories.scss";
import { formatUrlString } from "../../../utils/formatUrlString/formatUrlString";

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
  const [stories, setStories] = useState([]);

  function fetchStories() {
    fetch("https://drupal.bedtimeproject.dev/rest/views/stories")
      .then((resp) => resp.json())
      .then((data) => setStories(data));
  }

  useEffect(function getListOfStories() {
    fetchStories();
  }, []);

  return (
    <StandardWrapper>
      <Switch>
        <Route exact path="/read/stories">
          <div className="Stories-Container">
            <SEO title="Stories" />
            <Bookshelf
              pageTitle="Stories"
              books1={stories.map((story, index) => {
                if (index > 2) {
                  return null;
                }

                const link = formatUrlString(story.title);
                return (
                  <BookLink
                    key={index}
                    link={`/read/stories/${link}`}
                    story={story}
                  />
                );
              })}
              books2={stories.map((story, index) => {
                if (index <= 2 || index > 5) {
                  return null;
                }

                const link = formatUrlString(story.title);
                return (
                  <BookLink
                    key={index}
                    link={`/read/tales/${link}`}
                    story={story}
                  />
                );
              })}
              books3={stories.map((story, index) => {
                if (index <= 5 || index > 8) {
                  return null;
                }
                const link = formatUrlString(story.title);
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
        </Route>

        {stories.map((story, index) => {
          const link = formatUrlString(story.title);
          return (
            <Route key={index} exact path={`/read/stories/${link}`}>
              <SEO title={story.title} />
              <Story story={story} />
            </Route>
          );
        })}
      </Switch>
    </StandardWrapper>
  );
}
