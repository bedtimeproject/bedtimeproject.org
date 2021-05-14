import { Link } from "react-router-dom";

import "./PlayButton.css";

export default function PlayButton({ children, link }) {
  return (
    <Link to={link} className="PlayButton-Container">
      <div className="PlayButton">{children}</div>
    </Link>
  );
}
