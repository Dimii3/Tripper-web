import { LOGOS_BRAND } from "../constants";
import { motion } from "motion/react";

export default function LogoList() {
  const logosAnimation = {
    x: ["0%", "-100%"],
    transition: {
      duration: 8,
      ease: "linear",
      repeat: Infinity,
    },
  };

  return (
    <div className="logos__list">
      <motion.ul className="inner-slider" animate={logosAnimation}>
        {LOGOS_BRAND.map((logo) => (
          <img
            className="logos__item"
            key={logo.brand}
            src={logo.imgUrl}
            alt={logo.brand}
          ></img>
        ))}
      </motion.ul>
      <motion.ul className="inner-slider" animate={logosAnimation}>
        {LOGOS_BRAND.map((logo) => (
          <img
            className="logos__item"
            key={logo.brand}
            src={logo.imgUrl}
            alt={logo.brand}
          ></img>
        ))}
      </motion.ul>
      <motion.ul className="inner-slider" animate={logosAnimation}>
        {LOGOS_BRAND.map((logo) => (
          <img
            className="logos__item"
            key={logo.brand}
            src={logo.imgUrl}
            alt={logo.brand}
          ></img>
        ))}
      </motion.ul>
    </div>
  );
}
