import { useContext, useEffect } from "react";
import { AppContext } from "../../Contexts/AppContext";

import sanityClient from "../../client";

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
     * @version 2.0.0
     */
    function fetchStoryData() {
      sanityClient
        .fetch(
          `*[_type == "tale" && dateTime(publishedAt) < dateTime(now())] | order(publishedAt) {
            title,
            slug,
            author,
            mainImage,
            publishedAt,
          }`
        )
        .then((data) => {
          dispatch({ type: "SET_TALES", payload: data });
        });

      sanityClient
        .fetch(
          `*[_type == "story" && dateTime(publishedAt) < dateTime(now())] | order(publishedAt) {
          title,
          slug,
          author,
          mainImage,
          publishedAt,
        }`
        )
        .then((data) => {
          dispatch({ type: "SET_STORIES", payload: data });
        });
    },
    [dispatch]
  );
}
