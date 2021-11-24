// @ts-check
import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import Loading from "../Loading/Loading";

/**
 * @function LazyRoute
 * @description A wrapper to wrap a lazy loaded Route in React Router. Wraps
 * with <Route> and <Suspense>
 * @param {object} props
 * @param {React.Component|object} props.children
 * @param {string} props.path
 * @param {boolean} [props.exact]
 * @author Alexander Burdiss
 * @since 11/23/21
 * @version 1.0.0
 */
export default function LazyRoute({ children, path, exact = false }) {
  return (
    <Route exact={exact} path={path}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </Route>
  );
}
