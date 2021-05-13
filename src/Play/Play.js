import { Switch, Route, Link } from "react-router-dom";

import BlackJack from "./BlackJack/BlackJack";
import Playground from "./Playground/Playground";

export default function Play() {
  return (
    <div>
      <div>Hello, Play!</div> (breadcrumbs)
      <Switch>
        <Route exact path="/play">
          <Link to="/play/blackjack">BlackJack</Link>
          <Link to="/play/playground">Playground</Link>
        </Route>
        <Route path="/play/blackjack">
          <BlackJack />
        </Route>
        <Route path="/play/playground">
          <Playground />
        </Route>
      </Switch>
    </div>
  );
}
