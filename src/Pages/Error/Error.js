import React from "react";

// Components
import ForestMountains from "../../Components/Background/ForestMountains/ForestMountains";

// Assets
import scroll from "../404/scroll.svg";
import logo from "../../assets/images/logo.png";
import "../404/404.scss";
import "../../Components/Structural/Footer/Footer.scss";
import "../../Components/Structural/Header/Header.scss";

/**
 * @function Error
 * @description The page that is displayed when there is an uncaught error on
 * the site. This is rendered outside of all structural elements on the site,
 * so it cannot use React Router, React Helmet, or anything else that requires
 * a wrapping component, hence the rebuild of the Header and Footer in this
 * component
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 The Bedtime Project
 * @author Alexander Burdiss
 * @since 7/12/23
 * @version 1.0.0
 */
export default function Error() {
  return (
    <>
      <header className={"HeaderContainer"}>
        <div className="HeaderInner">
          <a href="/">
            <div className={"HeaderLogoContainer"}>
              <img src={logo} width={50} height={50} alt="An Open Book" />
              <div className={"HeaderTitle"}>The Bedtime Project</div>
            </div>
          </a>
          <nav>
            <ul className="HeaderNavigationList">
              <li>
                <a href={"/"} className="HeaderButtonContainer">
                  <div className="HeaderButton">Home</div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="FourOhFour-Container">
        <ForestMountains />
        <img src={scroll} alt="" className="FourOhFour-Scroll" />
        <div className="FourOhFour-Scroll-Text-Container">
          <h1>Whoops! We broke something.</h1>
          <p>
            If this keeps happening,{" "}
            <a href="mailto:code@bedtimeproject.org">email us.</a> We will try
            to get this fixed as soon as possible!
          </p>
          <p>
            <a href="/">Head back home</a> to keep browsing.
          </p>
        </div>
      </div>
      <footer className="FooterContainer">
        <div className="CopyrightContainer">
          Copyright © {new Date().getFullYear()} The Bedtime Project, All rights
          reserved
        </div>
      </footer>
    </>
  );
}
