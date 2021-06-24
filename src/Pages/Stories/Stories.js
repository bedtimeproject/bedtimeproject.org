import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";

import PageTitle from "../../Components/Structural/PageTitle/PageTitle";

import "./Stories.scss";

/**
 * @function Stories
 * @description The parent component that handles much of the navigation for the
 * stories tab screens. This component also provides a wrapper with padding used
 * on this stack only
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.1.0
 * @component
 * @example
 * ```jsx
 * <Stories />
 * ```
 */
export default function Stories() {
  return (
    <div className="Stories-Container">
      <Helmet>
        <title>Stories | The Bedtime Project</title>
      </Helmet>
      <Switch>
        <Route exact path="/stories">
          <PageTitle>Stories</PageTitle>
          <div className="Stories-Buttons-Container">Coming Soon!</div>
        </Route>
      </Switch>
    </div>
  );
}
