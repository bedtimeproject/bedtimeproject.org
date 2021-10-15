import React from "react";
import { Link } from "react-router-dom";
import { capitalize } from "../../../utils/capitalize/capitalize";
import "./Breadcrumb.scss";

/**
 * @function Breadcrumb
 * @description A stylized breadcrumb link to render on the site. This component
 * takes no arguments, but creates the breadcrumbs automatically from the url.
 * @param props The JSX props passed to this React component
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 2.0.0
 * @component
 * @example
 * <Breadcrumb />
 */
export default function Breadcrumb() {
  const currentURL = window.location.href;
  let currentPath = currentURL.split("#/")[1];
  // Remove trailing /
  if (currentPath[currentPath.length - 1] == "/") {
    currentPath = currentPath.slice(0, currentPath.length - 1);
  }
  const pathParts = currentPath.split("/");
  // Remove current path from breadcrumbs
  pathParts.pop();

  return (
    <div className="Breadcrumb-Container">
      {pathParts &&
        pathParts.map((crumb, index) => {
          if (!crumb) {
            return null;
          }

          let path = "";
          for (let i = 0; i <= index; i++) {
            path += "/" + pathParts[i];
          }

          return (
            <span className="Breadcrumb" key={index}>
              <Link to={path}>
                <span>{capitalize(crumb)}</span>
              </Link>
            </span>
          );
        })}
    </div>
  );
}
