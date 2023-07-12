import { Link } from "react-router-dom";
import "./Header.scss";
import HeaderButton from "../../Buttons/HeaderButton/HeaderButton";

import logo from "../../../assets/images/logo.png";

/**
 * @function Header
 * @description The header for the site.
 * Note: If you are updating this component, be sure to take a look at the
 * Error component, since it has a rebuild of the header in it that doesn't use
 * any of the React Router links
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 1.0.2
 * @component
 * @example
 * <Header />
 */
export default function Header() {
  return (
    <header className={"HeaderContainer"}>
      <div className="HeaderInner">
        <Link to="/">
          <div className={"HeaderLogoContainer"}>
            <img src={logo} width={50} height={50} alt="An Open Book" />
            <div className={"HeaderTitle"}>The Bedtime Project</div>
          </div>
        </Link>
        <nav>
          <ul className="HeaderNavigationList">
            <li>
              <HeaderButton link={"/"}>Home</HeaderButton>
            </li>
            <li>
              <HeaderButton link="/read">Read</HeaderButton>
            </li>
            <li>
              <HeaderButton link="/play">Play</HeaderButton>
            </li>
            <li>
              <HeaderButton link="/about">About</HeaderButton>
            </li>
            <li>
              <HeaderButton link="/parents">Parents</HeaderButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
