import { Link } from "react-router-dom";
import HeaderButton from "../Buttons/HeaderButton/HeaderButton";

import logo from "../../assets/images/logo.png";

import "./Header.css";

export default function Header() {
  return (
    <div className={"HeaderContainer"}>
      <Link to="/">
        <div className={"HeaderLogoContainer"}>
          <img src={logo} width={50} height={50} alt="The Bedtime Project" />
          <div className={"HeaderTitle"}>The Bedtime Project</div>
        </div>
      </Link>
      <nav>
        <ul className="HeaderNavigationList">
          <li>
            <HeaderButton link={"/"}>Home</HeaderButton>
          </li>
          <li>
            <HeaderButton link="/play">Play</HeaderButton>
          </li>
          <li>
            <HeaderButton link="/stories">Stories</HeaderButton>
          </li>
          <li>
            <HeaderButton link="/about">About</HeaderButton>
          </li>
        </ul>
      </nav>
    </div>
  );
}
