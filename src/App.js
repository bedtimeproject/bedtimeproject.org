import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

// Root components
import Play from "./Pages/Play/Play";
import BlackJack from "./Pages/Play/BlackJack/BlackJack";
import Playground from "./Pages/Play/Playground/Playground";
import Chess from "./Pages/Play/Chess/Chess";
import LightsOut from "./Pages/Play/LightsOut/LightsOut";
import Sudoku from "./Pages/Play/Sudoku/Sudoku";
import Crossword from "./Pages/Play/Crossword/Crossword";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Construction from "./Pages/Construction/Construction";
import Read from "./Pages/Read/Read";
import Stories from "./Pages/Read/Stories/Stories";
import Tales from "./Pages/Read/Tales/Tales";
import Quips from "./Pages/Read/Quips/Quips";
import FourOhFour from "./Pages/404/404";
import Acknowledgements from "./Pages/About/Acknowledgements/Acknowledgements";
import Licenses from "./Pages/About/Licenses/Licenses";

// Stories without Header and Footer
import TheLadyAndTheFrog from "./Pages/Read/Tales/TheLadyAndTheFrog/TheLadyAndTheFrog";
import MrsBlueSky from "./Pages/Read/Tales/MrsBlueSky/MrsBlueSky";
import TheGuideToSunset from "./Pages/Read/Tales/TheGuideToSunset/TheGuideToSunset";

/**
 * @function App
 * @description The root of this React application. This component mostly
 * handles the navigation of the application.
 * @author Alexander Burdiss
 * @since 5/12/21
 * @version 1.0.1
 * @component
 * @example
 * <App />
 */
export default function App() {
  return (
    <div className="AppWrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Construction />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/play">
            <Switch>
              <Route exact path="/play">
                <Play />
              </Route>
              <Route path="/play/blackjack">
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
                <Sudoku />
              </Route>
              <Route path="/play/crossword">
                <Crossword />
              </Route>
              <Route path="/play/*">
                <FourOhFour />
              </Route>
            </Switch>
          </Route>
          <Route path="/read">
            <Switch>
              <Route exact path="/read">
                <Read />
              </Route>
              <Route path="/read/stories">
                <Stories />
              </Route>
              <Route exact path="/read/tales/the-lady-and-the-frog">
                <TheLadyAndTheFrog />
              </Route>
              <Route exact path="/read/tales/mrs-blue-sky">
                <MrsBlueSky />
              </Route>
              <Route exact path="/read/tales/the-guide-to-sunset">
                <TheGuideToSunset />
              </Route>
              <Route path="/read/quips">
                <Quips />
              </Route>
              <Route path="/read/tales">
                <Tales />
              </Route>
              <Route path="/read/*">
                <FourOhFour />
              </Route>
            </Switch>
          </Route>
          <Route path="/about">
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/about/acknowledgements">
              <Acknowledgements />
            </Route>
            <Route exact path="/about/licenses">
              <Licenses />
            </Route>
            <Route path="/about/*">
              <FourOhFour />
            </Route>
          </Route>
          <Route path="*">
            <FourOhFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
