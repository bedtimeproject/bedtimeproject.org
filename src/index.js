import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";

// Polyfills
import "core-js/features/string/replace-all";

import "normalize.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
