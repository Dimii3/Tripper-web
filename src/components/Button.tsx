import React from "react";
import { motion } from "framer-motion";

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
    <motion.a
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      href="#"
      className={`btn ${mode === "primary" ? "btn-primary" : "btn-secondary"}`}
    >
      {children}
    </motion.a>
  );
}
