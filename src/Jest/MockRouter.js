import { Route, BrowserRouter, Routes } from "react-router-dom";

/**
 * @function MockRouter
 * @description A mock react router component that handles 
 * @param {*} children 
 * @returns 
 */
export function MockRouter({children}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={children} />
        {/* <Route index element={<div />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
