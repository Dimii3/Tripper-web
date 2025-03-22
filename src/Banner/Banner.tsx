import { useGSAP } from "@gsap/react";
import "./Banner.scss";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  useGSAP(() => {
    gsap.from([".banner__heading", ".banner__image img"], {
      scrollTrigger: {
        trigger: ".banner",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
      opacity: 0,
      y: 200,
      stagger: 0.4,
      duration: 1,
      ease: "power2.out",
    });
  });
  return (
    <section className="banner container">
      <h2 className="heading-1 banner__heading">
        Ready for the adventure
        <br />
        of a lifetime?
      </h2>
      <div className="banner__image">
        <img
          src="banner.png"
          alt="Scenic view of forest at sunrise"
          loading="lazy"
        />
      </div>
    </section>
  );
}
