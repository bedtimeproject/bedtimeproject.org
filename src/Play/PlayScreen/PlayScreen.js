import PlayButton from "../../Components/Buttons/PlayButton/PlayButton";
import PageTitle from "../../Components/Structural/PageTitle/PageTitle";

import "./PlayScreen.css";

export default function PlayScreen() {
  return (
    <div className="PlayScreen-Container">
      <PageTitle>Play</PageTitle>
      <div className="Play-Links">
        <PlayButton link="/play/blackjack">BlackJack</PlayButton>
        <PlayButton link="/play/playground">Playground</PlayButton>
        <PlayButton link="/play/lightsout">Lights Out</PlayButton>
      </div>
    </div>
  );
}
