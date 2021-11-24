// @ts-check
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";

import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import BookLink from "../../../Components/Buttons/BookLink/BookLink";
import { formatUrlString } from "../../../utils/formatUrlString/formatUrlString";

import "./Tales.scss";
import SEO from "../../../Components/Structural/SEO/SEO";
import Tale from "./Tale/Tale";
import Bookshelf from "../../../Components/General/Bookshelf/Bookshelf";

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
  const [tales, setTales] = useState([]);

  function fetchTales() {
    fetch("https://drupal.bedtimeproject.dev/rest/views/tales")
      .then((resp) => resp.json())
      .then((data) => setTales(data));
  }

  useEffect(function getListOfTales() {
    fetchTales();
  }, []);

  return (
    <StandardWrapper>
      <Switch>
        <Route exact path="/read/tales">
          <div className="Tales-Container">
            <SEO title="Tales" />
            <Bookshelf
              pageTitle="Tales"
              books1={tales.map((story, index) => {
                if (index > 2) {
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
              books2={tales.map((story, index) => {
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
              books3={tales.map((story, index) => {
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

        {tales.map((story, index) => {
          const link = formatUrlString(story.title);
          return (
            <Route key={index} exact path={`/read/tales/${link}`}>
              <SEO title={story.title} />
              <Tale tale={story} />
            </Route>
          );
        })}
      </Switch>
    </StandardWrapper>
  );
}
