// @ts-check
import { useEffect } from "react";

/**
 * @function useScrollAnimation
 * @description A custom hook that hooks up some necessary variables for the
 * scroll animation.
 * @todo Make this work with the custom npm package instead of having to use
 * this function
 * @author Alexander Burdiss
 * @since 10/17/21
 * @version 1.0.0
 * @param {Object} story
 */
export function useScrollAnimation(story) {
  useEffect(() => {
    let page = document.querySelector("#page");
    // If the "page" id doesn't exist, set it on the body.
    if (!page) {
      page = document.body;
      document.body.id = "page";
    }
    const bodyStyleMinHeight = `${story.body.length * 100}vh`;
    // @ts-ignore
    page.style.minHeight = bodyStyleMinHeight;
    function handleScroll() {
      document.body.style.setProperty(
        "--scroll",
        // @ts-ignore
        window.pageYOffset / (page.offsetHeight - window.innerHeight)
      );
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // @ts-ignore
      page.style.minHeight = "";
      document.body.style.removeProperty("--scroll");
    };
  }, [story.body.length]);
}
