import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");

/**
 * @function Modal
 * @description A self-contained modal component that handles animating into
 * the DOM. Uses React Portals to render the modal outside of the "#root"
 * element, but still be controllable on a component basis.
 * @param {Object} props The JSX props passed to this React component
 * @param {JSX.Element} props.children Any JSX to render as a Modal
 * @author Alexander Burdiss
 * @since 2/7/22
 * @version 1.0.0
 */
export default function Modal({ children }) {
  const elRef = useRef(null);
  const containerRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    setTimeout(() => {
      if (containerRef?.current?.style) {
        containerRef.current.style.opacity = 1;
      }
    }, 0);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(
    <div
      ref={containerRef}
      style={{ opacity: 0, transition: "300ms opacity ease-in-out" }}
    >
      {children}
    </div>,
    elRef.current
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};
