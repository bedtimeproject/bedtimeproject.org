// @ts-check
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

/**
 * @namespace SEO
 * @function SEO
 * @author Alexander Burdiss
 * @param {object} props
 * @param {string} [props.title]
 * @param {string} [props.description]
 * @param {string} [props.style]
 * @param {string} [props.themeColor]
 * @since 10/14/21
 * @version 1.1.2
 * @component
 */
export default function SEO({
  title,
  description,
  style,
  themeColor = "#625ace",
}) {
  useEffect(() => {
    document
      .querySelector("meta[name=theme-color]")
      .setAttribute("content", themeColor);
  }, [themeColor]);
  return (
    <Helmet>
      {description && <meta name="description" content={description} />}
      {title ? (
        <title>{title} | The Bedtime Project</title>
      ) : (
        <title>The Bedtime Project</title>
      )}
      {style && <style type="text/css">{style}</style>}
    </Helmet>
  );
}
