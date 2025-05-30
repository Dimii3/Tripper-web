import Button from "../components/Button";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Element } from "react-scroll";

import "./Header.scss";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerContentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(headerContentRef.current, {
      opacity: 0,
      y: 200,
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top+=100",
        end: "bottom center",
        scrub: true,
      },
    });
  });
  return (
    <Element name="header">
      <header ref={headerRef} className="header container">
        <div ref={headerContentRef} className="header-content mb-1">
          <h1 className="header-content__heading mb-3 heading-1">
            Discover the wildness
            <br />
            of nature
          </h1>
          <p className="header-content__text paragraphs-primary mb-2">
            Get adventurous in the most unknown areas
            <br />
            on earth, jungle, forests, caves, mountains.
          </p>
          <div className="header-buttons">
            <Button href="about" mode="primary">
              Start the Journey
            </Button>
            <Button href="contact" mode="secondary">
              Join Us
            </Button>
          </div>
        </div>
        <div className="header-image">
          <div className="header-image__shadow"></div>
          <img
            className="header-image__img"
            src="/header-img.png"
            alt="Tropical forest"
          />
        </div>
      </header>
    </Element>
  );
}
