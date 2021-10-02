import React from "react";
import { addDrupalUrlToImageTag } from "../../../../utils/addDrupalUrlToImageTag/addDrupalUrlToImageTag";

import "./QuipsDisplay.scss";

/**
 * @function LimerickDisplay
 * @description A wrapper that handles rendering the markdown for the limericks.
 * @param props The JSX props passed to this React component
 * @param {String} props.limerick The limerick to display in this view.
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 2.0.0
 * @component
 * @example
 * <LimerickDisplay limerick={limerick} />
 */
export default function LimerickDisplay({ limerick }) {
  const image = addDrupalUrlToImageTag(limerick.field_main_image);
  return (
    <div>
      <h1>{limerick.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: limerick.body }} />
      {image && <div dangerouslySetInnerHTML={{ __html: image }} />}
    </div>
  );
}
