import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Play from "./Play/Play";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div>Hello, Bedtime Project!</div>
        <Link to="/play">Play</Link>
      </div>
      <Switch>
        <Route path="/play">
          <Play />
        </Route>
      </Switch>
    </Router>
  );
}
