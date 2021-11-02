import React from "react";
import { Link } from "react-router-dom";
import "./DoorButton.scss";

/**
 * @function DoorButton
 * @description A Button that is also a door.
 * @param props The JSX props passed to this React component
 * @param {String} props.image The src for the door image
 * @param {String} props.link The path to navigate to when this door is
 * clicked
 * @param {String} props.label The text to render under this door.
 * @see Home
 * @author Alexander Burdiss
 * @since 6/8/21
 * @version 1.1.0
 * @component
 * @example
 * <DoorButton image={Stories} link="/stories" label="Stories" />
 */
export default function DoorButton({ image, link, label, alt }) {
  return (
    <div className="Door-Button-Container">
      <Link to={link}>
        <img className="Door-Button-Door" src={image} alt={alt} />
        <div className="Door-Button-Label">{label}</div>
      </Link>
    </div>
  );
}
