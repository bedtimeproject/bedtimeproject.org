import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import PlayButton from "../../Components/Buttons/PlayButton/PlayButton";

import Waves from "../../Components/Background/Waves/Waves";
import SEO from "../../Components/Structural/SEO/SEO";

import "./Play.scss";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";

/**
 * @function Play
 * @description A navigational component that handles the switches for all of
 * the games on this stack.
 * @author Alexander Burdiss
 * @since 5/12/21
 * @version 1.2.0
 * @component
 * @example
 * <Play />
 */
export default function Play() {
  return (
    <StandardWrapper headerDecoration={false}>
      <SEO title="Play" />

      <Waves />
      <PageTitle>Play</PageTitle>
      <div className="Play-Links">
        <PlayButton link="/play/playground">Playground</PlayButton>
        {/* <PlayButton link="/play/chess">Chess</PlayButton> */}
        <PlayButton link="/play/lights-out">Lights Out</PlayButton>
        <PlayButton link="/play/sudoku">Sudoku</PlayButton>
      </div>
    </StandardWrapper>
  );
}
