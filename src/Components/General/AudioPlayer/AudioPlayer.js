// @ts-check
import React, { useRef, useState } from "react";
import "./AudioPlayer.scss";

import { IoPlay, IoPause } from "react-icons/io5";

import oldRecordPlayer from "../../../assets/images/oldrecordplayer.svg";
import record from "../../../assets/images/record.svg";

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
  const ICON_SIZE = 30;
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
          <img src={oldRecordPlayer} alt="A hand crank record player" />
          {playing ? <IoPause size={ICON_SIZE} /> : <IoPlay size={ICON_SIZE} />}
        </div>
        {attribution && <span className="Attribution">{attribution}</span>}
      </button>
      <audio src={src} ref={audioElemRef} />
    </div>
  );
}
