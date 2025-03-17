import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type LinkProps = {
  href: string;
  classLink?: string;
  children: React.ReactNode;
};

export default function Link({ href, classLink, children }: LinkProps) {
  return (
    <a href={href} className={`link ${classLink}`}>
      {children} <FaArrowRightLong />
    </a>
  );
}
