import { motion } from "framer-motion";
import "./Preloader.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type PreloaderProps = {
  setIsLoading: (value: boolean) => void;
};

export default function Preloader({ setIsLoading }: PreloaderProps) {
  useGSAP(() => {
    gsap.from(".preloader__heading", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      delay: 2,
      ease: "easeInOut",
    });
    gsap.to(".preloader", {
      opacity: 0,
      duration: 1,
      delay: 4,
      ease: "easeInOut",
      onComplete: () => {
        setIsLoading(false);
      },
    });
  });

  const PathVariantsStroke = {
    initial: {
      pathLength: 0,
    },
    animate: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="preloader">
      <svg
        width="99"
        height="137"
        viewBox="0 0 99 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_215_443)">
          <motion.path
            variants={PathVariantsStroke}
            initial="initial"
            animate="animate"
            d="M0.5 61.2551C0.5 46.2592 13.1259 34.0217 28.8199 33.7667L28.8199 136.5H0.5L0.5 61.2551Z"
            stroke="#fdfaf6"
          />
          <motion.path
            variants={PathVariantsStroke}
            initial="initial"
            animate="animate"
            d="M35.5312 73.1099C51.7167 73.1099 64.8512 85.6559 64.8512 101.102L64.8512 137H35.5313L35.5312 73.1099Z"
            stroke="#fdfaf6"
          />
          <motion.path
            variants={PathVariantsStroke}
            initial="initial"
            animate="animate"
            d="M70.1797 109.512C85.7049 109.764 98.218 121.739 98.4949 136.5H70.1797V109.512Z"
            stroke="#fdfaf6"
          />
          <motion.path
            variants={PathVariantsStroke}
            initial="initial"
            animate="animate"
            d="M65.3906 33.1021C65.3906 48.5547 52.2497 61.0945 36.0707 61.0945L36.0707 33.1021L65.3906 33.1021Z"
            stroke="#fdfaf6"
          />
          <motion.path
            variants={PathVariantsStroke}
            initial="initial"
            animate="animate"
            d="M64.8512 13.9962C64.8512 6.26632 58.2877 0 50.1912 0C42.0947 0 35.5312 6.26632 35.5312 13.9962C35.5313 21.7261 42.0947 27.9924 50.1912 27.9924C58.2877 27.9924 64.8512 21.7261 64.8512 13.9962Z"
            stroke="#fdfaf6"
          />
        </g>
        <defs>
          <clipPath id="clip0_215_443">
            <rect width="99" height="137" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h1 className="heading-1 preloader__heading">Tripper</h1>
    </div>
  );
}
