// @ts-check
import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderDecoration from "../HeaderDecoration/HeaderDecoration";
import IeWarning from "../IeWarning/IeWarning";
import MainContent from "../MainContent/MainContent";
import SkipLink from "../SkipLink/SkipLink";
import "./StandardWrapper.scss";

/**
 * @namespace StandardWrapper
 * @function StandardWrapper
 * @author Alexander Burdiss
 * @since 10/14/21
 * @version 1.1.0
 * @component
 */
export default function StandardWrapper({
  children,
  breadcrumb = true,
  headerDecoration = true,
}) {
  return (
    <div className="Standard-Wrapper">
      <SkipLink />
      <Header />
      <IeWarning />
      {headerDecoration && <HeaderDecoration />}
      <MainContent>
        {breadcrumb && <Breadcrumb />}
        {children}
      </MainContent>
      <Footer />
    </div>
  );
}
