import { Route, HashRouter, Routes } from "react-router-dom";

/**
 * @function MockRouter
 * @description A mock react router component that handles 
 * @param {*} children 
 * @returns 
 */
export function MockRouter({children}) {
  return (
    <HashRouter>
      <Routes>
        <Route index element={children} />
      </Routes>
    </HashRouter>
  );
}
