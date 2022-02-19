// @ts-check
import React, { useEffect, useState } from "react";

import "./About.scss";

import sanityClient from "../../client";

import { imageUrl } from "../../utils/imageUrl/imageUrl";

import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import Contributor from "../../Components/General/Contributor/Contributor";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import StoryButton from "../../Components/Buttons/StoryButton/StoryButton";
import SEO from "../../Components/Structural/SEO/SEO";

/**
 * @function About
 * @description Information about the contributors of the site, and about the
 * site itself.
 * @author Alexander Burdiss
 * @since 6/6/21
 * @lastmodified 2/19/22
 * @version 1.5.0
 * @component
 * @example
 * <About />
 */
export default function About() {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
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
      .then(setContributors)
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
                  name={contributor.name}
                  bio={contributor.bio}
                  image={imageUrl(contributor.image)
                    .width(400)
                    .height(400)
                    .url()}
                  alt={contributor.alt}
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
