import { Link } from "react-router-dom";

import "./LimerickButton.css";

export default function LimerickButton({ children, link }) {
  return (
    <Link to={link} className="LimerickButton-Container">
      <div>{children}</div>
    </Link>
  );
}
