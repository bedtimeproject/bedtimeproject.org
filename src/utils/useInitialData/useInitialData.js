import { useContext, useEffect } from "react";
import { AppContext } from "../../Contexts/AppContext";

/**
 * @function useInitialData
 * @description A custom hook that handles fetching all of the data needed at
 * the start of the app.
 * @author Alexander Burdiss
 * @since 1/9/22
 * @version 1.0.0
 */
export function useInitialData() {
  const { dispatch } = useContext(AppContext);

  useEffect(
    /**
     * @function useInitialData~fetchStoryData
     * @description Handles fetching the data from Drupal and setting that
     * data to the global context for use building out the routes correctly.
     * @author Alexander Burdiss
     * @since 1/9/22
     * @version 1.0.0
     */
    function fetchStoryData() {
      // grab tales
      fetch("https://drupal.bedtimeproject.dev/rest/views/tales")
        .then((resp) => resp.json())
        .then((data) => dispatch({ type: "SET_TALES", payload: data }));

      // Grab Stories
      fetch("https://drupal.bedtimeproject.dev/rest/views/stories")
        .then((resp) => resp.json())
        .then((data) => dispatch({ type: "SET_STORIES", payload: data }));
    },
    [dispatch]
  );
}
