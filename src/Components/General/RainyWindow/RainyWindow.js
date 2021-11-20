// @ts-check
import React from "react";
import "./RainyWindow.scss";

import Lighthouse from "../../Background/Lighthouse/Lighthouse";
import Snow from "../../Background/Snow/Snow";

/**
 * @namespace RainyWindow
 * @function RainyWindow
 * @author Alexander Burdiss
 * @param {object} props
 * @param {boolean} [props.right]
 * @param {string} [props.weather='rain']
 * @since 10/17/21
 * @version 1.0.0
 * @component
 */
export default function RainyWindow({ right, weather = "rain" }) {
  return (
    <div className={`RainyWindow-Container ${right ? "Right" : ""}`}>
      <div className="frame">
        <div className="outside">
          <Lighthouse minimal right={right} />
          {weather == "rain" && (
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
          )}
          {weather == "snow" && <Snow />}
        </div>
        <div className="window top"></div>
        <div className="window bottom"></div>
        <div className="sill">
          {right && (
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
          )}
        </div>
      </div>
    </div>
  );
}
