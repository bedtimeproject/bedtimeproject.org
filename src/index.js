
import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";

import "./normalize.css";
import "./index.css";

import App from "./App";

import { AppProvider } from "./Contexts/AppContext";

import { polyfills } from "./polyfills";
polyfills();

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
