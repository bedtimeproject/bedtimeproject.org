// @ts-check
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import "./LinkModal.scss";

/**
 * @namespace LinkModal
 * @function LinkModal
 * @description A modal that will alert the user if they are about to leave the
 * bedtime project, and give them an option to stay on the site instead. This
 * component will add this functionality to every link on the page, and is
 * included in the StandardWrapper
 * @author Alexander Burdiss
 * @since 11/23/21
 * @lastModified 11/30/21
 * @version 1.1.0
 * @component
 */
export default function LinkModal() {
  const [href, setHref] = useState(undefined);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    // Attach function to window to open external links
    // @ts-ignore
    window.openBtpLink = function (newHref) {
      setHref(newHref);
      setIsShowing(true);
    };

    // Find all links that are off the site and add a warning.
    const pageLinks = Array.from(document.querySelectorAll("a"));
    pageLinks.forEach((link) => {
      if (
        !link.href.includes("http://localhost") &&
        !link.href.includes("https://bedtimeproject.org") &&
        !link.href.includes("http://bedtimeproject.org") &&
        !link.href.includes("mailto:")
      ) {
        link.onclick = (event) => {
          event.preventDefault();
          // @ts-ignore
          window.openBtpLink(link.href);
          return false;
        };
      }
    });
  }, []);

  return isShowing ? (
    <Modal>
      <div className="LinkModal-Container">
        <div className="LinkModal-Content">
          <div className="Description-Container">
            Yikes! You are now leaving The Bedtime Project. Would you like to
            continue?
          </div>
          <div className="Button-Container">
            <button onClick={() => setIsShowing(false)}>
              Stay on The Bedtime Project
            </button>
            <a
              href={href}
              onClick={() => {
                setIsShowing(false);
                return true;
              }}
            >
              Continue to {href}
            </a>
          </div>
        </div>
      </div>
    </Modal>
  ) : null;
}
