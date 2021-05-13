import { Link } from "react-router-dom";

import "./PlayButton.css";

export default function PlayButton({ children, link }) {
  return (
    <Link to={link}>
      <div>{children}</div>
    </Link>
  );
}
