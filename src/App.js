import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./Components/Structural/Header/Header";
import Footer from "./Components/Structural/Footer/Footer";

// Root components
import Play from "./Pages/Play/Play";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Construction from "./Pages/Construction/Construction";
import Read from "./Pages/Read/Read";
import FourOhFour from "./Pages/404/404";

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
          {/* Use the outer switch for pages that don't need the header and footer */}
          <Route exact path="/read/tales/the-lady-and-the-frog">
            <TheLadyAndTheFrog />
          </Route>
          <Route exact path="/read/tales/mrs-blue-sky">
            <MrsBlueSky />
          </Route>
          <Route exact path="/read/tales/the-guide-to-sunset">
            <TheGuideToSunset />
          </Route>
          <Route exact path="/">
            <Construction />
          </Route>
          <Route path="*">
            <Header />
            <main className="AppContentContainer">
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/play">
                  <Play />
                </Route>
                <Route path="/read">
                  <Read />
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
