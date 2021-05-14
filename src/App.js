import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Structural/Header/Header";
import Footer from "./Components/Structural/Footer/Footer";

import Play from "./Play/Play";
import About from "./About/About";
import Home from "./Home/Home";
import Stories from "./Stories/Stories";
import FourOhFour from "./404/404";

export default function App() {
  return (
    <div className="AppWrapper">
      <Router>
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
      </Router>
    </div>
  );
}
