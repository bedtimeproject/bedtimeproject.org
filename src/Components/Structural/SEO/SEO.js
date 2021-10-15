import React from "react";
import { Helmet } from "react-helmet";

/**
 * @namespace SEO
 * @function SEO
 * @author Alexander Burdiss
 * @since 10/14/21
 * @version 1.0.0
 * @component
 */
export default function SEO({ title }) {
  return (
    <Helmet>{title && <title>{title} | The Bedtime Project</title>}</Helmet>
  );
}
