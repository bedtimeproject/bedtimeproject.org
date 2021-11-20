// @ts-check
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

/**
 * @function Footer
 * @description The footer for the site.
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.0.1
 * @component
 * @example
 * <Footer />
 */
export default function Footer() {
  return (
    <footer className="FooterContainer">
      <div className="CopyrightContainer">
        Copyright © {new Date().getFullYear()} The Bedtime Project, All rights
        reserved
      </div>
      <div className="PrivacyPolicyContainer">
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
