import React from "react";

export default function Attribution({ children, background }) {
  return (
    <div
      className="ScrollAnimation-Attribution-Container"
      style={{ backgroundColor: background }}
    >
      <div className="ScrollAnimation-Attribution-Border">{children}</div>
    </div>
  );
}
