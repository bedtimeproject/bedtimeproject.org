import React from "react";
import ReactMarkdown from "react-markdown";

import "./QuipsDisplay.scss";

/**
 * @function LimerickDisplay
 * @description A wrapper that handles rendering the markdown for the limericks.
 * @param props The JSX props passed to this React component
 * @param {String} props.limerick The limerick to display in this view.
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <LimerickDisplay limerick={limerick} />
 * ```
 */
export default function LimerickDisplay({ limerick }) {
  return (
    <div>
      <ReactMarkdown>{limerick}</ReactMarkdown>
    </div>
  );
}
