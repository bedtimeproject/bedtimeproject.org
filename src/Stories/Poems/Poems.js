import { Link } from "react-router-dom";

export default function Poems() {
  return (
    <div>
      <div>Hello, Poems!</div>
      <Link to="/stories/poems/the-lady-and-the-frog">
        The Lady And The Frog
      </Link>
      <Link to="/stories/poems/mrs-blue-sky">Mrs. Blue Sky</Link>
    </div>
  );
}
