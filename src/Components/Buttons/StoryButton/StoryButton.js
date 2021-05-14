import { Link } from "react-router-dom";
import "./StoryButton.css";

export default function StoryButton({ children, onClick, link, className }) {
  return link ? (
    <Link
      to={link}
      className={"ButtonContainer" + (className ? " " + className : "")}
    >
      <div>{children}</div>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={"ButtonContainer" + (className ? " " + className : "")}
    >
      <div>{children}</div>
    </button>
  );
}
