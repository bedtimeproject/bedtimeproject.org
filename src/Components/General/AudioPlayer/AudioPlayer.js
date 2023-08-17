import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./AudioPlayer.scss";

import oldRecordPlayer from "../../../assets/images/oldrecordplayer.svg";
import record from "../../../assets/images/record.svg";
import play from "../../../assets/images/play.svg";
import pause from "../../../assets/images/pause.svg";

/**
 * @namespace AudioPlayer
 * @function AudioPlayer
 * @description An audio player that displays an old record player, an animated
 * spinning record, play/pause button, and an attribution
 * @param {object} props The JSX props passed to this React component
 * @param {string} props.src The source of the audio file to play
 * @param {string} props.attribution The text to display on the button
 * @author Alexander Burdiss
 * @since 12/27/21
 * @version 1.0.0
 * @component
 */
export default function AudioPlayer({ src, attribution }) {
  const audioElemRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    if (!playing) {
      audioElemRef.current.play();
      setPlaying(true);
    } else {
      audioElemRef.current.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="AudioPlayer-Container">
      <button onClick={togglePlay}>
        <div className="ImagesContainer">
          <img
            src={record}
            alt=""
            className={`record ${playing ? "on" : ""}`}
          />
          <img
            className="Record-Player"
            src={oldRecordPlayer}
            alt="A hand crank record player"
          />
          {playing ? (
            <img className="Play-Pause-Button" src={pause} alt="Pause" />
          ) : (
            <img className="Play-Pause-Button" src={play} alt="Play" />
          )}
        </div>
        {attribution && <span className="Attribution">{attribution}</span>}
      </button>
      <audio src={src} ref={audioElemRef} />
    </div>
  );
}

AudioPlayer.propTypes = {
  src: PropTypes.string,
  attribution: PropTypes.string,
};
