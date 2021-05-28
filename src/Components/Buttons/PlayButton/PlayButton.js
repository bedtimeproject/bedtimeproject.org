import { Link } from "react-router-dom";

import "./PlayButton.css";

/**
 * @function PlayButton
 * @description A button that is used on the Play site to take users to the
 * different games that exist on the site.
 * @param props The JSX props passed to this React component
 * @param {String} props.children The text to render on this component
 * @param {String} props.link A link to another page on the site
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <PlayButton link="/">Hello, Play Button!</PlayButton>
 * ```
 */
export default function PlayButton({ children, link }) {
  return (
    <Link to={link} className="PlayButton-Container">
      <div className="PlayButton">{children}</div>
    </Link>
  );
}
