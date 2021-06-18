import React from "react";
import { Switch, Route } from "react-router-dom";
import "./About.scss";

import AboutPage from "./AboutPage/AboutPage";
import Breadcrumb from "../../Components/Structural/Breadcrumb/Breadcrumb";
import Acknowledgements from "./Acknowledgements/Acknowledgements";
import Licenses from "./Licenses/Licenses";

/**
 * @function About
 * @description Information about the contributors of the site, and about the
 * site itself.
 * @author Alexander Burdiss
 * @since 6/6/21
 * @version 1.1.0
 * @component
 * @example
 * ```jsx
 * <About />
 * ```
 */
export default function About() {
  return (
    <div>
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
