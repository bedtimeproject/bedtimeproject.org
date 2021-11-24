// @ts-check
import React, { lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Styles
import "./App.scss";

// Helper Components
import LazyRoute from "./Components/Structural/LazyRoute/LazyRoute";

// Base Components
import Home from "./Pages/Home/Home";
// TODO: Lazy Load this after launch
import Construction from "./Pages/Construction/Construction";

// Read Pages
const Read = lazy(() => import("./Pages/Read/Read"));
const BedtimeStories = lazy(() =>
  import("./Pages/Read/BedtimeStories/BedtimeStories")
);
const TheLadyAndTheFrog = lazy(() =>
  import("./Pages/Read/BedtimeStories/TheLadyAndTheFrog/TheLadyAndTheFrog")
);
const MrsBlueSky = lazy(() =>
  import("./Pages/Read/BedtimeStories/MrsBlueSky/MrsBlueSky")
);
const TheGuideToSunset = lazy(() =>
  import("./Pages/Read/BedtimeStories/TheGuideToSunset/TheGuideToSunset")
);
const Stories = lazy(() => import("./Pages/Read/Stories/Stories"));
const Tales = lazy(() => import("./Pages/Read/Tales/Tales"));
const Quips = lazy(() => import("./Pages/Read/Quips/Quips"));

// Play Pages
const Play = lazy(() => import("./Pages/Play/Play"));
const Playground = lazy(() => import("./Pages/Play/Playground/Playground"));
const Chess = lazy(() => import("./Pages/Play/Chess/Chess"));
const LightsOut = lazy(() => import("./Pages/Play/LightsOut/LightsOut"));
const Sudoku = lazy(() => import("./Pages/Play/Sudoku/Sudoku"));

// About Pages
const About = lazy(() => import("./Pages/About/About"));
const Licenses = lazy(() => import("./Pages/About/Licenses/Licenses"));
const Acknowledgements = lazy(() =>
  import("./Pages/About/Acknowledgements/Acknowledgements")
);

// Parents Pages
const Parents = lazy(() => import("./Pages/Parents/Parents"));

// Misc Pages
const FourOhFour = lazy(() => import("./Pages/404/404"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy/PrivacyPolicy"));

/**
 * @function App
 * @description The root of this React application. This component mostly
 * handles the navigation of the application.
 * @author Alexander Burdiss
 * @since 5/12/21
 * @version 1.0.2
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
              <LazyRoute exact path="/play">
                <Play />
              </LazyRoute>
              <LazyRoute path="/play/playground">
                <Playground />
              </LazyRoute>
              <LazyRoute path="/play/chess">
                <Chess />
              </LazyRoute>
              <LazyRoute path="/play/lights-out">
                <LightsOut />
              </LazyRoute>
              <LazyRoute path="/play/sudoku">
                <Sudoku />
              </LazyRoute>
              <LazyRoute path="/play/*">
                <FourOhFour />
              </LazyRoute>
            </Switch>
          </Route>
          <Route path="/read">
            <Switch>
              <LazyRoute exact path="/read">
                <Read />
              </LazyRoute>
              <LazyRoute path="/read/stories">
                <Stories />
              </LazyRoute>
              <LazyRoute
                exact
                path="/read/bedtime-stories/the-lady-and-the-frog"
              >
                <TheLadyAndTheFrog />
              </LazyRoute>
              <LazyRoute exact path="/read/bedtime-stories/mrs-blue-sky">
                <MrsBlueSky />
              </LazyRoute>
              <LazyRoute exact path="/read/bedtime-stories/the-guide-to-sunset">
                <TheGuideToSunset />
              </LazyRoute>
              <LazyRoute path="/read/bedtime-stories">
                <BedtimeStories />
              </LazyRoute>
              <LazyRoute path="/read/quips">
                <Quips />
              </LazyRoute>
              <LazyRoute path="/read/tales">
                <Tales />
              </LazyRoute>
              <LazyRoute path="/read/*">
                <FourOhFour />
              </LazyRoute>
            </Switch>
          </Route>
          <Route path="/about">
            <Switch>
              <LazyRoute exact path="/about">
                <About />
              </LazyRoute>
              <LazyRoute exact path="/about/acknowledgements">
                <Acknowledgements />
              </LazyRoute>
              <LazyRoute exact path="/about/licenses">
                <Licenses />
              </LazyRoute>
              <LazyRoute path="/about/*">
                <FourOhFour />
              </LazyRoute>
            </Switch>
          </Route>
          <Route path="/parents">
            <Switch>
              <LazyRoute exact path="/parents">
                <Parents />
              </LazyRoute>
              <LazyRoute path="/parents/*">
                <FourOhFour />
              </LazyRoute>
            </Switch>
          </Route>
          <LazyRoute exact path="/privacy-policy">
            <PrivacyPolicy />
          </LazyRoute>
          <LazyRoute path="*">
            <FourOhFour />
          </LazyRoute>
        </Switch>
      </Router>
    </div>
  );
}
