import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Structural/Header/Header";
import Footer from "./Components/Structural/Footer/Footer";

// Root components
import Play from "./Play/Play";
import About from "./About/About";
import Home from "./Home/Home";
import Stories from "./Stories/Stories";
import FourOhFour from "./404/404";

// Stories without Header and Footer
import TheLadyAndTheFrog from "./Stories/Poems/TheLadyAndTheFrog/TheLadyAndTheFrog";
import MrsBlueSky from "./Stories/Poems/MrsBlueSky/MrsBlueSky";

/**
 * @function App
 * @description The root of this React application. This component mostly
 * handles the navigation of the application.
 * @author Alexander Burdiss
 * @since 5/12/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <App />
 * ```
 */
export default function App() {
  return (
    <div className="AppWrapper">
      <Router>
        <Switch>
          {/* Use the outer switch for pages that don't need the header and footer */}
          <Route exact path="/stories/poems/the-lady-and-the-frog">
            <TheLadyAndTheFrog />
          </Route>
          <Route exact path="/stories/poems/mrs-blue-sky">
            <MrsBlueSky />
          </Route>
          <Route path="*">
            <Header />
            <main className="AppContentContainer">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/play">
                  <Play />
                </Route>
                <Route path="/stories">
                  <Stories />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="*">
                  <FourOhFour />
                </Route>
              </Switch>
            </main>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
