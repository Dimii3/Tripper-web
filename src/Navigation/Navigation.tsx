import { Link } from "react-scroll";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="header" smooth={true} duration={500}>
        <img src="main-logo.svg" alt="logo" className="nav__logo" />
      </Link>

      <ul className="nav__list">
        <li className="nav__item">
          <Link
            activeClass="nav__item--active"
            offset={100}
            to="trips"
            smooth={true}
            duration={1000}
          >
            Trips
          </Link>
        </li>
        <li className="nav__item">
          <Link
            activeClass="nav__item--active"
            offset={100}
            to="team"
            smooth={true}
            duration={1000}
          >
            Team
          </Link>
        </li>
        <li className="nav__item">
          <Link
            activeClass="nav__item--active"
            offset={100}
            to="faq"
            smooth={true}
            duration={1000}
          >
            FAQ
          </Link>
        </li>
        <li className="nav__item">
          <Link
            activeClass="nav__item--active"
            offset={100}
            to="contact"
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
