import { Link } from "react-router-dom";

import "./LimerickButton.css";

export default function LimerickButton({ children, link }) {
  return (
    <Link to={link}>
      <div>{children}</div>
    </Link>
  );
}
