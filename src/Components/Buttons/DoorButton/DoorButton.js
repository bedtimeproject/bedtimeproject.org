import React from "react";
import { Link } from "react-router-dom";

export default function DoorButton({ image, link, label }) {
  return (
    <div className="Door-Button-Container">
      <Link to={link}>
        <img className="Door-Button-Door" src={image} alt={label} />
        <div className="Door-Button-Label">{label}</div>
      </Link>
    </div>
  );
}
