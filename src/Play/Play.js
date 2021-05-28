import { Switch, Route } from "react-router-dom";
import Breadcrumb from "../Components/Structural/Breadcrumb/Breadcrumb";

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
          <Breadcrumb link="/play">Play</Breadcrumb>
          <BlackJack />
        </Route>
        <Route path="/play/playground">
          <Breadcrumb link="/play">Play</Breadcrumb>
          <Playground />
        </Route>
        <Route path="/play/lightsout">
          <Breadcrumb link="/play">Play</Breadcrumb>
          <LightsOut />
        </Route>
      </Switch>
    </div>
  );
}
