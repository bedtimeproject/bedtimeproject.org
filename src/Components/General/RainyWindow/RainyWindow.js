import React from "react";
import "./RainyWindow.scss";

import Lighthouse from "../../Background/Lighthouse/Lighthouse";

/**
 * @namespace RainyWindow
 * @function RainyWindow
 * @author Alexander Burdiss
 * @since 10/17/21
 * @version 1.0.0
 * @component
 */
export default function RainyWindow({ right }) {
  return (
    <div className={`RainyWindow-Container ${right ? "Right" : ""}`}>
      <div className="frame">
        <div className="outside">
          <Lighthouse minimal right={right} />
          <div className="rain">
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
          </div>
        </div>
        <div className="window top"></div>
        <div className="window bottom"></div>
        <div className="ac">
          <div className="unit">
            <div className="vent small">
              <div className="slot"></div>
              <div className="slot"></div>
              <div className="slot"></div>
            </div>
            <div className="vent small">
              <div className="slot"></div>
              <div className="slot"></div>
              <div className="slot"></div>
            </div>
            <div className="controls"></div>
            <div className="vent large">
              <div className="slot"></div>
              <div className="slot"></div>
              <div className="slot"></div>
              <div className="slot"></div>
              <div className="slot"></div>
              <div className="slot"></div>
              <div className="slot"></div>
              <div className="slot"></div>
              <div className="slot"></div>
            </div>
          </div>
        </div>
        <div className="curtain-rod"></div>
        {!right && <div className="curtain left"></div>}
        {right && <div className="curtain right"></div>}
        <div className="sill">
          <div className="items">
            <div className="planter">
              <div className="leaf"></div>
              <div className="leaf"></div>
              <div className="leaf"></div>
            </div>
            <div className="books">
              <div className="book"></div>
              <div className="book"></div>
              <div className="book"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
