import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BlackJack from "./BlackJack/BlackJack";
import Playground from "./Playground/Playground";

export default function Play() {
  return (
    <div>
      <div>Hello, Play!</div>
      <Link to="/play/blackjack">BlackJack</Link>
      <Link to="/play/playground">Playground</Link>
      <Switch>
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
