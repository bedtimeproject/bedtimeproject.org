import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";

import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";
import StandardWrapper from "../../../Components/Structural/StandardWrapper/StandardWrapper";
import BookLink from "../../../Components/Buttons/BookLink/BookLink";
import { formatUrlString } from "../../../utils/formatUrlString/formatUrlString";

import "./Tales.scss";
import SEO from "../../../Components/Structural/SEO/SEO";
import Tale from "./Tale/Tale";

/**
 * @function Tales
 * @description A collection of longer poems on the site
 * @author Alexander Burdiss
 * @since 6/15/21
 * @version 2.0.0
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
          <SEO title="Tales" />
          <PageTitle>Tales</PageTitle>
          <div className="BooksContainer">
            {tales.map((story, index) => {
              const link = formatUrlString(story.title);
              return (
                <BookLink
                  key={index}
                  link={`/read/tales/${link}`}
                  story={story}
                />
              );
            })}
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
