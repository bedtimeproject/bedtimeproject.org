import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";

import polyfills from "./utils/polyfills/polyfills";

import "normalize.css";
import "./index.css";
import App from "./App";

polyfills();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
