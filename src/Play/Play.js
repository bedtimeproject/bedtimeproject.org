import { Switch, Route } from "react-router-dom";

import BlackJack from "./BlackJack/BlackJack";
import LightsOut from "./LightsOut/LightsOut";
import Playground from "./Playground/Playground";
import PlayScreen from "./PlayScreen/PlayScreen";

export default function Play() {
  return (
    <div>
      <Switch>
        <Route exact path="/play">
          <PlayScreen />
        </Route>
        <Route path="/play/blackjack">
          <BlackJack />
        </Route>
        <Route path="/play/playground">
          <Playground />
        </Route>
        <Route path="/play/lightsout">
          <LightsOut />
        </Route>
      </Switch>
    </div>
  );
}
