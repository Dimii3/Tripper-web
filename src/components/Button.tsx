import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  mode?: "primary" | "secondary";
  onClick?: () => void;
};

export default function Button({
  children,
  mode = "primary",
  onClick,
}: ButtonProps) {
  return (
    <a
      href="#"
      className={`btn ${mode === "primary" ? "btn-primary" : "btn-secondary"}`}
    >
      {children}
    </a>
  );
}
