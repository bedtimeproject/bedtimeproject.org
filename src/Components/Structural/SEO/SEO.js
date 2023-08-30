import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

// @ts-ignore
import packageJson from "../../../../package.json";

/**
 * @namespace SEO
 * @function SEO
 * @author Alexander Burdiss
 * @param {object} props
 * @param {string} [props.title]
 * @param {string} [props.description]
 * @param {string} [props.style]
 * @param {string} [props.themeColor]
 * @param {string} [props.ogType]
 * @param {string} [props.twitterCard]
 * @param {object} [props.children] Optional additional meta tags that can be
 * added to the HEAD component
 * @since 10/14/21
 * @version 1.2.1
 * @component
 */
export default function SEO({
  title,
  description,
  style,
  themeColor = "#625ace",
  ogType,
  twitterCard,
  children,
}) {
  useEffect(() => {
    const themeMeta = document.querySelector("meta[name=theme-color]");
    themeMeta?.setAttribute("content", themeColor);
  }, [themeColor]);
  return (
    <Helmet>
      {description && <meta name="description" content={description} />}
      {title ? (
        <title>{title} | The Bedtime Project</title>
      ) : (
        <title>The Bedtime Project</title>
      )}

      <meta
        property="og:title"
        content={title ? title : "The Bedtime Project"}
      />
      <meta property="og:type" content={ogType ? ogType : "article"} />
      <meta property="og:url" content={window.location.href} />
      <meta
        property="og:description"
        content={description ? description : packageJson.description}
      />
      <meta property="og:site_name" content="The Bedtime Project" />

      <meta
        name="twitter:title"
        content={title ? title : "The Bedtime Project"}
      />
      <meta
        name="twitter:description"
        content={description ? description : packageJson.description}
      />
      <meta
        name="twitter:card"
        content={twitterCard ? twitterCard : "summary"}
      />

      {style && <style type="text/css">{style}</style>}
      {children}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  style: PropTypes.string,
  themeColor: PropTypes.string,
  ogType: PropTypes.string,
  twitterCard: PropTypes.string,
  children: PropTypes.node,
};
