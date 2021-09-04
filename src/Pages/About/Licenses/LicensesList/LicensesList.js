import React from "react";
import "./LicensesList.scss";

/**
 * @function LicensesList
 * @description The list of licenses, created from the data passed by
 * Licenses.js
 * @param props The JSX props passed to this React component
 * @param {Object[]} props.licenses The licenses that are used throughout this
 * app and will be displayed in a list on this component.
 * @author Alexander Burdiss
 * @since 6/10/21
 * @version 1.0.0
 */
export default function LicensesList({ licenses }) {
  return (
    <div className="LicensesList-Container">
      {licenses.map(
        (
          {
            image,
            userUrl,
            username,
            name,
            version,
            licenses,
            repository,
            licenseUrl,
          },
          index
        ) => {
          let title = name;
          if (username) {
            if (title.toLowerCase() != username.toLowerCase()) {
              title += ` by ${username}`;
            }
          }
          return (
            <div className="LicensesListItem" key={index}>
              <div className="cardShadow">
                <div className="card">
                  {image && (
                    <a href={userUrl}>
                      <img src={image} className="image" alt={title} />
                    </a>
                  )}
                  <div style={{ maxWidth: "90%" }} className="item">
                    <a href={repository}>
                      <div className="name">{title}</div>
                      <div className="text">{version}</div>
                    </a>
                    <a className="text" href={licenseUrl}>
                      {licenses}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
