// @ts-check
import React, { useEffect, useState } from "react";
import sanityClient from "../../client";

import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import Contributor from "../../Components/General/Contributor/Contributor";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import StoryButton from "../../Components/Buttons/StoryButton/StoryButton";
import SEO from "../../Components/Structural/SEO/SEO";

import "./About.scss";
import { addDrupalUrlToImageTag } from "../../utils/addDrupalUrlToImageTag/addDrupalUrlToImageTag";

/**
 * @function About
 * @description Information about the contributors of the site, and about the
 * site itself.
 * @author Alexander Burdiss
 * @since 6/6/21
 * @version 1.4.3
 * @component
 * @example
 * <About />
 */
export default function About() {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://drupal.bedtimeproject.dev/rest/views/contributors"
      );
      const data = await response.json();
      setContributors(data);
    }
    fetchData();

    sanityClient
      .fetch(
        `*[_type == "contributor"]{
          name,
          slug,
          image{
            asset->{
              _id,
              url
            },
          },
          alt,
          bio
        }`
      )
      .then((data) => console.log(data))
      .catch(console.error);
  }, []);

  return (
    <StandardWrapper>
      <SEO title="About" />
      <div className="AboutPage-Container">
        <div className="Header-Container">
          <PageTitle>About</PageTitle>
          <div className="Description-Contianer">
            <div>
              The Bedtime Project aims at helping you get to sleep, or just have
              a fun evening with stories and games.
            </div>
            <div>Here are the people who make this site possible:</div>
          </div>
        </div>
        <div className="All-Contributors-Container">
          {contributors &&
            contributors.map((contributor, index) => {
              return (
                <Contributor
                  key={index}
                  name={contributor.title}
                  bio={contributor.body}
                  image={addDrupalUrlToImageTag(contributor.field_main_image)}
                />
              );
            })}
        </div>
        <div className="Header-Container">
          <div className="Description-Contianer">
            <div>
              Contact us if you have any questions at all, want to report a bug,
              or have any suggestions.
            </div>
            <a href="mailto:code@bedtimeproject.org">code@bedtimeproject.org</a>{" "}
            <a href="mailto:moonbloom@bedtimeproject.org ">
              moonbloom@bedtimeproject.org
            </a>
          </div>
        </div>
        <div className="Link-Container">
          <StoryButton link="/about/acknowledgements">
            Acknowledgements
          </StoryButton>
          <StoryButton link="/about/licenses">Licenses</StoryButton>
        </div>
      </div>
    </StandardWrapper>
  );
}
