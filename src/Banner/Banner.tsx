import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import "./Banner.scss";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(bannerRef.current, {
      opacity: 0,
      duration: 1,
      y: 100,
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });

  return (
    <section ref={bannerRef} className="banner container">
      <h2 className="heading-1 banner__heading">
        Ready for the adventure
        <br />
        of a lifetime?
      </h2>
      <div className="banner__image">
        <img
          src="banner.png"
          alt="Scenic view of forest at sunrise"
          // loading="lazy"
        />
      </div>
    </section>
  );
}
