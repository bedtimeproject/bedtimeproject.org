import { Switch, Route } from "react-router-dom";

import BlackJack from "./BlackJack/BlackJack";
import Chess from "./Chess/Chess";
import Crossword from "./Crossword/Crossword";
import LightsOut from "./LightsOut/LightsOut";
import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import PlayButton from "../../Components/Buttons/PlayButton/PlayButton";
import Playground from "./Playground/Playground";
import Sudoku from "./Sudoku/Sudoku";
import Waves from "../../Components/Background/Waves/Waves";
import SEO from "../../Components/Structural/SEO/SEO";

import "./Play.scss";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";

/**
 * @function Play
 * @description A navigational component that handles the switches for all of
 * the games on this stack.
 * @author Alexander Burdiss
 * @since 5/12/21
 * @version 1.2.0
 * @component
 * @example
 * <Play />
 */
export default function Play() {
  return (
    <StandardWrapper>
      <SEO title="Play" />
      <Switch>
        <Route exact path="/play">
          <Waves />
          <PageTitle>Play</PageTitle>
          <div className="Play-Links">
            <PlayButton link="/play/playground">Playground</PlayButton>
            {/* <PlayButton link="/play/chess">Chess</PlayButton> */}
            <PlayButton link="/play/lights-out">Lights Out</PlayButton>
            <PlayButton link="/play/sudoku">Sudoku</PlayButton>
            <PlayButton link="/play/crossword">Crossword</PlayButton>
          </div>
        </Route>
        <Route path="/play/blackjack">
          <Waves />
          <BlackJack />
        </Route>
        <Route path="/play/playground">
          <Playground />
        </Route>
        <Route path="/play/chess">
          <Chess />
        </Route>
        <Route path="/play/lights-out">
          <LightsOut />
        </Route>
        <Route path="/play/sudoku">
          <Waves />
          <Sudoku />
        </Route>
        <Route path="/play/crossword">
          <Waves />
          <Crossword />
        </Route>
      </Switch>
    </StandardWrapper>
  );
}
