import React from "react";
import "./AcknowledgementListItem.scss";

export default function AcknowledgementListItem({ name, contribution }) {
  return (
    <div className="AcknowledgementListItem-Container">
      <h2>{name}</h2>
      <div>{contribution}</div>
    </div>
  );
}
