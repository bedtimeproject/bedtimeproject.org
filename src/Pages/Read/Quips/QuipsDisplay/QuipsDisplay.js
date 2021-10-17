import React from "react";
import { addDrupalUrlToImageTag } from "../../../../utils/addDrupalUrlToImageTag/addDrupalUrlToImageTag";
import SEO from "../../../../Components/Structural/SEO/SEO";

import "./QuipsDisplay.scss";

/**
 * @function QuipsDisplay
 * @description A wrapper that handles rendering the quips.
 * @param props The JSX props passed to this React component
 * @param {String} props.quip The quip to display in this view.
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 2.0.0
 * @component
 * @example
 * <QuipsDisplay quip={quip} />
 */
export default function QuipsDisplay({ quip }) {
  const image = addDrupalUrlToImageTag(quip.field_main_image);
  return (
    <div className="QuipsDisplay-Container">
      <SEO title={quip.title} />
      <div className="LeftBox">
        <h1>{quip.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: quip.body }} />
      </div>
      {image && (
        <div className="RightBox">
          <div dangerouslySetInnerHTML={{ __html: image }} />
        </div>
      )}
    </div>
  );
}
