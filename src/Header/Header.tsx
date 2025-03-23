import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Button from "../components/Button";

import "./Header.scss";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(
      ".header-content__heading",
      {
        opacity: 0,
        y: 100,
        delay: 0.3,
      },
      0
    );
    tl.from(
      ".header-content__text",
      {
        opacity: 0,
        y: 100,
        delay: 0.3,
      },
      0.1
    );
    tl.from(
      ".header-buttons",
      {
        opacity: 0,
        y: 100,
        delay: 0.3,
      },
      0.15
    );
    tl.from(
      ".header-image__img",
      {
        opacity: 0,
        y: 100,
        delay: 0.3,
      },
      0.2
    );

    ScrollTrigger.create({
      trigger: ".header",
      start: "top top",
      end: "bottom top",
      animation: gsap.to(".header-content", {
        opacity: 0,
        y: 200,
        duration: 0.6,
      }),
      scrub: true,
    });
  });
  return (
    <Element name="header">
      <header className="header container">
        <div className="header-content mb-1">
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
            alt="header image"
          />
        </div>
      </header>
    </Element>
  );
}
