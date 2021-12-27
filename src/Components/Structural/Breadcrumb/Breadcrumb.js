// @ts-check
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { capitalize } from "../../../utils/capitalize/capitalize";
import "./Breadcrumb.scss";

/**
 * @function Breadcrumb
 * @description A stylized breadcrumb link to render on the site. This component
 * takes no arguments, but creates the breadcrumbs automatically from the url.
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 2.2.1
 * @component
 * @example
 * <Breadcrumb />
 */
export default function Breadcrumb() {
  const [pathParts, setPathParts] = useState([]);
  const location = useLocation();

  useEffect(
    function getCurrentUrl() {
      if (location.pathname) {
        let currentPath = location.pathname;
        // Remove leading /
        if (currentPath[0] == "/") {
          currentPath = currentPath.slice(1);
        }
        // Remove trailing /
        if (currentPath[currentPath.length - 1] == "/") {
          currentPath = currentPath.slice(0, currentPath.length - 1);
        }

        const tempPathParts = currentPath.split("/");
        // Remove current path from breadcrumbs
        tempPathParts.pop();

        setPathParts(tempPathParts);
      }
    },
    [location]
  );
  return pathParts && pathParts.length ? (
    <div className="Breadcrumb-Outer">
      <div className="Breadcrumb-Inner">
        {pathParts.map((crumb, index) => {
          if (!crumb) {
            return null;
          }

          let path = "";
          for (let i = 0; i <= index; i++) {
            path += "/" + pathParts[i];
          }

          return (
            <span className="Breadcrumb-Text" key={index}>
              <Link className="Breadcrumb-Link" to={path}>
                <span>{capitalize(crumb.replace("-", " "))}</span>
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  ) : null;
}
