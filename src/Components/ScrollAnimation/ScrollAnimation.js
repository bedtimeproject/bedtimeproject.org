import React, { useEffect } from "react";

import DefaultTitle from "./DefaultTitle/DefaultTitle";
import DefaultAttribution from "./DefaultAttribution/DefaultAttribution";
import Body from "./Body/Body";

/**
 * @function ScrollAnimation
 * @description A container for one Scroll Animation that handles the styles and
 * different logistical elements for a scroll animation poem. This should be
 * used in conjunction with `Stanza`, `Title`, and `Attribution`.
 * @param props The JSX props passed to this React component
 * @param {React.Component} props.children The parts of the poem to render on the
 * screen
 * @param {string} props.bodyStyleMinHeight The minimum height of the screen,
 * preferrably in Viewport heights that will be attached to the body.
 * @author Alexander Burdiss
 * @since 6/26/21
 * @version 1.1.0
 * @component
 * @example
 * <ScrollAnimation story={story}/>
 */
export default function ScrollAnimation({ story }) {
  useEffect(() => {
    const bodyStyleMinHeight = `${story.body.length * 100}vh`;

    document.body.style.minHeight = bodyStyleMinHeight;
    function handleScroll() {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.minHeight = "";
      document.body.style.removeProperty("--scroll");
    };
  }, [story.body.length]);

  return (
    <div className="ScrollAnimation-Container">
      {/* Styles for the global object, just on this page */}
      <style>{`
        :root * {
          /* Pause the animation */
          animation-play-state: paused;
          /* Bind the animation to scroll */
          animation-delay: calc(var(--scroll) * -1s);
          /* These last 2 properites clean up overshoot weirdness */
          animation-iteration-count: 1;
          animation-fill-mode: both;
        }
      `}</style>
      {
        {
          default: (
            <DefaultTitle
              background={story.stanzaBackgroundColor}
              author={story.author}
              stanzaCount={story.body.length}
            >
              {story.title}
            </DefaultTitle>
          ),
        }[story.titleCard]
      }
      <Body story={story} />
      {
        {
          default: (
            <DefaultAttribution
              background={story.stanzaBackgroundColor}
              stanzaCount={story.body.length}
              backlink={"/poems/tales/"}
            >
              {story.attribution}
            </DefaultAttribution>
          ),
        }[story.attributionCard]
      }
    </div>
  );
}
