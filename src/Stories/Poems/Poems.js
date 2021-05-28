import { Link } from "react-router-dom";
import PageTitle from "../../Components/Structural/PageTitle/PageTitle";

export default function Poems() {
  return (
    <div>
      <PageTitle>Poems</PageTitle>
      <Link to="/stories/poems/the-lady-and-the-frog">
        The Lady And The Frog
      </Link>
      <Link to="/stories/poems/mrs-blue-sky">Mrs. Blue Sky</Link>
    </div>
  );
}
