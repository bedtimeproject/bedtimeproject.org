import React from "react";
import "./PageTitle.scss";

/**
 * @function PageTitle
 * @description A stylized Page title, that can easily be used across the site
 * on the different pages
 * @param props The JSX props passed to this React component
 * @param {String} props.children The text to render in this title
 * @author Alexander Burdiss
 * @since 5/28/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <PageTitle>Hello, Title!</PageTitle>
 * ```
 */
export default function PageTitle({ children }) {
  return (
    <div className="PageTitle-Container">
      <h1 className="PageTitle">{children}</h1>
    </div>
  );
}
