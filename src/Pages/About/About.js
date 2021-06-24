import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import React from "react";

import AboutPage from "./AboutPage/AboutPage";
import Acknowledgements from "./Acknowledgements/Acknowledgements";
import Breadcrumb from "../../Components/Structural/Breadcrumb/Breadcrumb";
import Licenses from "./Licenses/Licenses";

import "./About.scss";

/**
 * @function About
 * @description Information about the contributors of the site, and about the
 * site itself.
 * @author Alexander Burdiss
 * @since 6/6/21
 * @version 1.2.0
 * @component
 * @example
 * ```jsx
 * <About />
 * ```
 */
export default function About() {
  return (
    <div>
      <Helmet>
        <title>About | The Bedtime Project</title>
      </Helmet>
      <Switch>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/about/acknowledgements">
          <Breadcrumb link="/about">About</Breadcrumb>
          <Acknowledgements />
        </Route>
        <Route exact path="/about/licenses">
          <Breadcrumb link="/about">About</Breadcrumb>
          <Licenses />
        </Route>
      </Switch>
    </div>
  );
}
