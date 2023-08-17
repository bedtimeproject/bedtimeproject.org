import React from "react";
import PropTypes from "prop-types";
import "./Lighthouse.scss";

/**
 * @namespace Lighthouse
 * @function Lighthouse
 * @author Alexander Burdiss
 * @param {object} props The JSX props passed to this React component
 * @param {boolean} [props.minimal]
 * @param {boolean} [props.right]
 * @since 10/10/21
 * @version 1.0.1
 * @component
 */
export default function Lighthouse({ minimal, right }) {
  return (
    <div className="Lighthouse-Container">
      <div className="scene">
        <div className="background">
          {!minimal && (
            <>
              <div className="stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
              </div>
              <div className="moon"></div>
              <div className="mountains">
                <div className="mountain"></div>
                <div className="mountain"></div>
                <div className="mountain"></div>
                <div className="mountain"></div>
              </div>
              <div className="sea">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="boat">
                  <div className="sail"></div>
                  <div className="sail"></div>
                  <div className="base"></div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="lighthouse-group">
          {!minimal && !right && <div className="land"></div>}
          <div className="lighthouse-holder">
            {minimal && right ? null : (
              <>
                <div className="shadow"></div>
                <div className="lighthouse"></div>
              </>
            )}
            <div className="top">
              <div className="light-container">
                <div className="light"></div>
              </div>
              <div className="rail"></div>
              <div className="middle"></div>
              <div className="roof">
                <div className="roof-light"></div>
              </div>
              <div className="glow"></div>
            </div>
            {minimal && right ? null : (
              <>
                <div className="windows">
                  <div className="window"></div>
                  <div className="window"></div>
                  <div className="window"></div>
                  <div className="window"></div>
                </div>
                <div className="door">
                  <div className="stairs"></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Lighthouse.propTypes = {
  minimal: PropTypes.bool,
  right: PropTypes.bool,
};
