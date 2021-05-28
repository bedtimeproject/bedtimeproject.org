import "./Footer.css";

/**
 * @function Footer
 * @description The footer for the site.
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Footer />
 * ```
 */
export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="CopyrightContainer">
        Copyright © {new Date().getFullYear()} Daniel Stigmon, All rights
        reserved
      </div>
    </div>
  );
}
