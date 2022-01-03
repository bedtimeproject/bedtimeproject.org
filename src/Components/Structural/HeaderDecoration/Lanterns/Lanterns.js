// @ts-check
import React from "react";
import "./Lanterns.scss";

/**
 * @namespace Lanterns
 * @function Lanterns
 * @author Alexander Burdiss
 * @since 12/29/21
 * @version 1.0.1
 * @component
 */
export default function Lanterns() {
  return (
    <div className="Lanterns-Container">
      <div className="lines">
        <div className="lantern">
          <div className="hook"></div>
          <div className="light"></div>
        </div>
        <div className="lantern">
          <div className="hook"></div>
          <div className="light"></div>
        </div>
        <div className="lantern">
          <div className="hook"></div>
          <div className="light"></div>
        </div>
        <div className="lantern">
          <div className="hook"></div>
          <div className="light"></div>
        </div>
        <div className="lantern extra">
          <div className="hook"></div>
          <div className="light"></div>
        </div>
        <div className="lantern extra">
          <div className="hook"></div>
          <div className="light"></div>
        </div>
        <div className="lantern extra">
          <div className="hook"></div>
          <div className="light"></div>
        </div>
        <div className="lantern extra">
          <div className="hook"></div>
          <div className="light"></div>
        </div>
      </div>
    </div>
  );
}
