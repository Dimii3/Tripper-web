import { Link } from "react-scroll";
import "./Navigation.scss";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { navLinks } from "../constants";
import NavLink from "./NavLink";
export default function Navigation() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
      setIsMobile(false);
    } else {
      setHidden(false);
    }
  });

  const handleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="nav__container container">
      <motion.nav
        variants={{
          hidden: { y: "-100%" },
          visible: { y: "0%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        className={`nav ${isMobile ? "nav--mobile" : ""}`}
      >
        <Link to="header" smooth={true} duration={1000} onClick={handleMenu}>
          <img src="main-logo.svg" alt="logo" className="nav__logo" />
        </Link>
        <button
          className={`nav__btn ${isMobile ? "nav__btn--active" : ""}`}
          onClick={handleMenu}
        >
          <div className="nav__btn-line"></div>
          <div className="nav__btn-line"></div>
          <div className="nav__btn-line"></div>
        </button>

        <ul className={`nav__list ${isMobile ? "nav__list--active" : ""}`}>
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={handleMenu}>
              {link.name}
            </NavLink>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}
