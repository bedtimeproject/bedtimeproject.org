import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

export default function Breadcrumb({ children, link }) {
  return (
    <Link to={link} className="Breadcrumb-Container">
      <span>{children}</span>
    </Link>
  );
}
