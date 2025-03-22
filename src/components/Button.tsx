import React from "react";

import { Link } from "react-scroll";

type ButtonProps = {
  children: React.ReactNode;
  mode?: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
};

export default function Button({
  children,
  mode = "primary",
  onClick,
  href,
}: ButtonProps) {
  return (
    <Link
      to={href || ""}
      className={`btn btn-${mode}`}
      onClick={onClick}
      smooth={true}
      duration={1000}
    >
      {children}
    </Link>
  );
}
