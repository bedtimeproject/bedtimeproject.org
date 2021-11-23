// @ts-check
import React from "react";

// Styles
import "./Play.scss";

// Components
import PageTitle from "../../Components/Structural/PageTitle/PageTitle";
import PlayButton from "../../Components/Buttons/PlayButton/PlayButton";
import Waves from "../../Components/Background/Waves/Waves";
import SEO from "../../Components/Structural/SEO/SEO";
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";

// Assets
import bulbImage from "../../assets/images/playImages/bulb.svg";
import castleImage from "../../assets/images/playImages/castle.svg";
import sudokuImage from "../../assets/images/playImages/sudoku.svg";
import { Link } from "react-router-dom";

/**
 * @function Play
 * @description A navigational component that handles the switches for all of
 * the games on this stack.
 * @author Alexander Burdiss
 * @since 5/12/21
 * @version 2.0.0
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
        <div className="Links-Left">
          <div className="Image-Container">
            <Link to="/play/playground" tabIndex={-1}>
              <img
                src={castleImage}
                alt="A tall castle with red roofs and purple flags"
              />
            </Link>
          </div>
          <div className="LinkDescription-Container">
            <PlayButton link="/play/playground">Playground</PlayButton>
            <div>
              Come exercise your creative brain with our random story generator.
              We give you the basics and you fill in the rest.
            </div>
          </div>
        </div>
        <div className="Links-Right">
          <div className="Image-Container">
            <Link to="/play/lights-out" tabIndex={-1}>
              <img src={bulbImage} alt="A lit lightbulb" />
            </Link>
          </div>
          <div className="LinkDescription-Container">
            <PlayButton link="/play/lights-out">Lights Out</PlayButton>
            <div>
              Turn out the lights! This is The Bedtime Project after all.
            </div>
          </div>
        </div>
        <div className="Links-Left">
          <div className="Image-Container">
            <Link to="/play/sudoku" tabIndex={-1}>
              <img src={sudokuImage} alt="A sudoku board" />
            </Link>
          </div>
          <div className="LinkDescription-Container">
            <PlayButton link="/play/sudoku">Sudoku</PlayButton>
            <div>
              An ancient game of numbers and squares. Can you solve the puzzle?
            </div>
          </div>
        </div>
      </div>
    </StandardWrapper>
  );
}
