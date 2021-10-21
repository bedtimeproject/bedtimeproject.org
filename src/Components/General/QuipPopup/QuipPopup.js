import React, { useEffect, useState } from "react";
import "./QuipPopup.scss";

import { addDrupalUrlToImageTag } from "../../../utils/addDrupalUrlToImageTag/addDrupalUrlToImageTag";

/**
 * @namespace QuipPopup
 * @function QuipPopup
 * @author Alexander Burdiss
 * @since 10/20/21
 * @version 1.0.0
 * @component
 */
export default function QuipPopup({ quip, className }) {
  const [isShowing, setIsShowing] = useState(false);
  const toggleIsShowing = () => setIsShowing((prev) => !prev);

  useEffect(() => {
    function closeOnClickOutside(event) {
      if (!event.target.closest(".QuipPopover") && isShowing) {
        console.log("close");
        setIsShowing(false);
      }
    }

    document.body.addEventListener("click", closeOnClickOutside);

    return () => {
      document.body.removeEventListener("click", closeOnClickOutside);
    };
  }, [isShowing]);

  return (
    <div className={`QuipPopup-Container ${className ? className : ""}`}>
      {quip && (
        <>
          <button
            onClick={toggleIsShowing}
            className={`ImageContainer ${isShowing ? "active" : ""}`}
            dangerouslySetInnerHTML={{
              __html: addDrupalUrlToImageTag(quip.field_main_image),
            }}
          />
          {isShowing && (
            <div className="QuipPopover">
              <h2>{quip.title}</h2>
              <div className="Author">By {quip.field_author}</div>
              <div dangerouslySetInnerHTML={{ __html: quip.body }} />
              <button
                className="CloseButton"
                aria-label="Close Quip"
                onClick={toggleIsShowing}
              >
                X
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
