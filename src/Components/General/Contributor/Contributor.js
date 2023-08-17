import React from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";

import "./Contributor.scss";

import sanityClient from "../../../client";

/**
 * @function Contributor
 * @description A formatted display for a contributor for the site.
 * @author Alexander Burdiss
 * @since 6/6/21
 * @version 2.0.0
 * @param {object} props The JSX props passed to this React component.
 * @param {string} props.name The name of the contributor.
 * @param {object} props.bio The biography of the contributor.
 * @param {string} props.image The path to the image of the contributor to
 * render
 * @param {string} props.alt Alt text for the image.
 */
export default function Contributor({ name, bio, image, alt }) {
  return (
    <div className="Contributor-Container">
      <img src={image} alt={alt} />
      <div className="Contributor-Name">{name}</div>
      <BlockContent
        blocks={bio}
        projectId={sanityClient.config().projectId}
        dataset={sanityClient.config().dataset}
      />
    </div>
  );
}

Contributor.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.object,
  image: PropTypes.string,
  alt: PropTypes.string,
};
