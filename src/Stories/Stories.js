import { Route, Switch } from "react-router";
import "./Stories.css";

import Poems from "./Poems/Poems";
import { Link } from "react-router-dom";

export default function Stories() {
  return (
    <div>
      <div>Hello, Stories!</div>
      <Link to="/stories/poems">Poems</Link>
      <Switch>
        <Route path="/stories/poems">
          <Poems />
        </Route>
      </Switch>
    </div>
  );
}
