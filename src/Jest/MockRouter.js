import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * @function MockRouter
 * @description A mock react router component that handles
 * @param {*} children
 * @returns
 */
export function MockRouter({ children }) {
  return (
    <HashRouter>
      <Routes>
        <Route index element={children} />
      </Routes>
    </HashRouter>
  );
}

MockRouter.propTypes = {
  children: PropTypes.node,
};
