import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";

// Polyfills
import "core-js/features/string/replace-all";

import "./normalize.css";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Contexts/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
