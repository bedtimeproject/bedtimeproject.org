import React from "react";
import ReactMarkdown from "react-markdown";
import "./Contributor.scss";

/**
 * @function Contributor
 * @description A formatted display for a contributor for the site.
 * @author Alexander Burdiss
 * @since 6/6/21
 * @version 1.0.0
 * @param props The JSX props passed to this React component.
 * @param {String} props.name The name of the contributor.
 * @param {String} props.bio The biography of the contributor.
 * @param {String} props.image The path to the image of the contributor to
 * render
 */
export default function Contributor({ name, bio, image }) {
  return (
    <div className="Contributor-Container">
      <img src={image} alt={name} className="Contributor-Image" />
      <div className="Contributor-Name">{name}</div>
      <ReactMarkdown>{bio}</ReactMarkdown>
    </div>
  );
}
