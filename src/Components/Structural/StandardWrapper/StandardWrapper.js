import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SkipLink from "../SkipLink/SkipLink";
import "./StandardWrapper.scss";

/**
 * @namespace StandardWrapper
 * @function StandardWrapper
 * @author Alexander Burdiss
 * @since 10/14/21
 * @version 1.0.0
 * @component
 */
export default function StandardWrapper({ children, breadcrumb = true }) {
  return (
    <div>
      <SkipLink />
      <Header />
      <main className="AppContentContainer">
        {breadcrumb && <Breadcrumb />}
        {children}
      </main>
      <Footer />
    </div>
  );
}
