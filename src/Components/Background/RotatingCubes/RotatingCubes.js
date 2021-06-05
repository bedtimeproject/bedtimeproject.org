import React from "react";

/**
 * @description Six rotating cubes that make a good background to an element
 * that has a solid background but doesn't take the whole width. These live
 * at a z-index of -1.
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <RotatingCubes />
 * ```
 */
export default function RotatingCubes() {
  return (
    <div className="RotatingCubes">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    </div>
  );
}
