import { Route, Switch } from "react-router";
import "./Stories.css";

import Poems from "./Poems/Poems";
import Limericks from "./Limericks/Limericks";
import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import Breadcrumb from "../../Components/Structural/Breadcrumb/Breadcrumb";
import StoryButton from "../../Components/Buttons/StoryButton/StoryButton";

/**
 * @function Stories
 * @description The parent component that handles much of the navigation for the
 * stories tab screens. This component also provides a wrapper with padding used
 * on this stack only
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Stories />
 * ```
 */
export default function Stories() {
  return (
    <div className="Stories-Container">
      <Switch>
        <Route exact path="/stories">
          <PageTitle>Stories</PageTitle>
          <div className="Stories-Buttons-Container">
            <StoryButton link="/stories/poems">Poems</StoryButton>
            <StoryButton link="/stories/limericks">Limericks</StoryButton>
          </div>
        </Route>
        <Route path="/stories/poems">
          <Breadcrumb link="/stories">Stories</Breadcrumb>
          <Poems />
        </Route>
        <Route path="/stories/limericks">
          <Breadcrumb link="/stories">Stories</Breadcrumb>
          <Limericks />
        </Route>
      </Switch>
    </div>
  );
}
