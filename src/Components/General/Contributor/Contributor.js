// @ts-check
import React from "react";
import "./Contributor.scss";

/**
 * @function Contributor
 * @description A formatted display for a contributor for the site.
 * @author Alexander Burdiss
 * @since 6/6/21
 * @version 1.0.0
 * @param {object} props The JSX props passed to this React component.
 * @param {String} props.name The name of the contributor.
 * @param {String} props.bio The biography of the contributor.
 * @param {String} props.image The path to the image of the contributor to
 * render
 */
export default function Contributor({ name, bio, image }) {
  return (
    <div className="Contributor-Container">
      <div dangerouslySetInnerHTML={{ __html: image }} />
      <div className="Contributor-Name">{name}</div>
      <div dangerouslySetInnerHTML={{ __html: bio }} />
    </div>
  );
}
