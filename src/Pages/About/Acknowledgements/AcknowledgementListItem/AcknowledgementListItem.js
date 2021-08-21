import React from "react";
import "./AcknowledgementListItem.scss";

/**
 * @function AcknowledgementListItem
 * @description One list item in the Acknowledgements list.
 * @param {*} props The JSX props passed to this React component
 * @param {string} props.name The name of the contributor
 * @param {string} props.contribution The contribution that the contrubutor
 * made to the project
 * @param {string} [props.link] The link to the contributor's site, or their
 * profile on the site where we found the asset. If this is not passed in, a
 * link will not render.
 * @author Alexander Burdiss
 * @since 8/12/21
 * @version 1.0.1
 */
export default function AcknowledgementListItem({ name, contribution, link }) {
  return (
    <div className="AcknowledgementListItem-Container">
      {link ? (
        <a href={link}>
          <h2>{name}</h2>
        </a>
      ) : (
        <h2>{name}</h2>
      )}
      <div>{contribution}</div>
    </div>
  );
}
