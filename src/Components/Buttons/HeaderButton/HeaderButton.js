import { Link } from "react-router-dom";
import "./HeaderButton.css";

export default function HeaderButton({ children, link }) {
  return (
    <Link to={link} className="HeaderButtonContainer">
      <div className="HeaderButton">{children}</div>
    </Link>
  );
}
