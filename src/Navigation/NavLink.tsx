import React, { useEffect, useState, JSX } from "react";
import { Link } from "react-scroll";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  onClick: () => void;
}

export default function NavLink({
  children,
  href,
  onClick,
}: NavLinkProps): JSX.Element {
  const [offset, setOffset] = useState(100);
  useEffect(() => {
    const match = window.matchMedia("(max-width: 576px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setOffset(0);
      } else {
        setOffset(160);
      }
    };

    handleChange({ matches: match.matches } as MediaQueryListEvent);

    match.addEventListener("change", handleChange);

    return () => {
      match.removeEventListener("change", handleChange);
    };
  }, []);

  console.log("offset", offset);

  return (
    <li className="nav__item">
      <Link
        activeClass="nav__item--active"
        to={href}
        offset={offset}
        onClick={onClick}
        spy={true}
        smooth={true}
        duration={1000}
      >
        {children}
      </Link>
    </li>
  );
}
