import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Acknowledgements from "./Acknowledgements/Acknowledgements";
import Breadcrumb from "../../Components/Structural/Breadcrumb/Breadcrumb";
import Licenses from "./Licenses/Licenses";

import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import Contributor from "../../Components/General/Contributor/Contributor";
import Checkerboard from "../../Components/Background/Checkerboard/Checkerboard";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import StoryButton from "../../Components/Buttons/StoryButton/StoryButton";

import "./About.scss";
import { addDrupalUrlToImageTag } from "../../utils/addDrupalUrlToImageTag/addDrupalUrlToImageTag";

/**
 * @function About
 * @description Information about the contributors of the site, and about the
 * site itself.
 * @author Alexander Burdiss
 * @since 6/6/21
 * @version 1.2.0
 * @component
 * @example
 * <About />
 */
export default function About() {
  const [contributors, setContributors] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://drupal.bedtimeproject.dev/rest/views/contributors"
      );
      const data = await response.json();
      setContributors(data);
    }
    fetchData();
  }, []);

  return (
    <StandardWrapper>
      <Helmet>
        <title>About | The Bedtime Project</title>
      </Helmet>
      <Switch>
        <Route exact path="/about">
          <div className="AboutPage-Container">
            <Checkerboard primaryColor="red" secondaryColor="black" />
            <PageTitle>About</PageTitle>
            <div className="Description-Contianer">
              <div>
                The Bedtime Project aims at helping you get to sleep, or just
                have a fun evening with stories and games.
              </div>
              <div>Here are the people who make this site possible:</div>
            </div>
            <div className="All-Contributors-Container">
              {contributors &&
                contributors.map((contributor, index) => {
                  return (
                    <Contributor
                      key={index}
                      name={contributor.title}
                      bio={contributor.body}
                      image={addDrupalUrlToImageTag(
                        contributor.field_main_image
                      )}
                    />
                  );
                })}
            </div>
            <div className="Link-Container">
              <StoryButton link="/about/acknowledgements">
                Acknowledgements
              </StoryButton>
              <StoryButton link="./about/licenses">Licenses</StoryButton>
            </div>
          </div>
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
    </StandardWrapper>
  );
}
