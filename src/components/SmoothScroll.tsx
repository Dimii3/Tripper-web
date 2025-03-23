import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

type SmoothScrollProps = {
  children?: React.ReactNode;
};

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main style={{ overflow: "hidden" }}>{children as React.ReactNode}</main>
  );
};

export default SmoothScroll;
