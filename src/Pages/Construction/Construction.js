import React from "react";
import Lighthouse from "../../Components/Background/Lighthouse/Lighthouse";
import "./Construction.scss";

/**
 * @namespace Construction
 * @function Construction
 * @author Alexander Burdiss
 * @since 10/10/21
 * @version 1.0.0
 * @component
 */
export default function Construction() {
  return (
    <div className="Construction-Container">
      <div className="Text-Container">
        <h1>The Bedtime Project</h1>
        <div>Coming December 1, 2021</div>
      </div>
      <Lighthouse />
    </div>
  );
}
