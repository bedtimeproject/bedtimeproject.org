import { Link } from "react-router-dom";

/**
 * @function StoryButton
 * @description A link that exists currently on the playground. If a link is
 * passed, the component will route to another page, but if not, the onClick
 * function will be called on click.
 * @param props The JSX props passed to this React component
 * @param {String} props.children The text to render in this button
 * @param {Function} props.onClick A function to call when this button is
 * clicked. If props.link is passed, this will not be called.
 * @param {String} props.link A link to route to. If this is passed, onClick
 * will not be called.
 * @param {String} props.className Additional class names to pass to this
 * component.
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <StoryButton link="/">Hello, StoryButton!</StoryButton>
 * ```
 */
export default function StoryButton({ children, onClick, link, className }) {
  return link ? (
    <Link
      to={link}
      className={"ButtonContainer" + (className ? " " + className : "")}
    >
      <div>{children}</div>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={"ButtonContainer" + (className ? " " + className : "")}
    >
      <div>{children}</div>
    </button>
  );
}
