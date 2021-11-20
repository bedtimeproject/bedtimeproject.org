// @ts-check
import React from "react";
import "./IeWarning.scss";

import { isIE } from "../../../utils/isIE/isIE";

/**
 * @namespace IeWarning
 * @function IeWarning
 * @author Alexander Burdiss
 * @since 11/19/21
 * @version 1.0.0
 * @component
 */
export default function IeWarning() {
  return isIE() ? (
    <div className="IeWarning-Container">
      <div>
        This website will not work correctly in Internet Explorer. Please use
        the new{" "}
        <a href="https://www.microsoft.com/en-us/edge">
          Microsoft Edge browser
        </a>
        .
      </div>
    </div>
  ) : null;
}
