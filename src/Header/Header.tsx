import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Button from "../components/Button";

import "./Header.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(
      ".header-content__heading",
      {
        opacity: 0,
        y: 100,
      },
      0
    );
    tl.from(
      ".header-content__text",
      {
        opacity: 0,
        y: 100,
      },
      0.1
    );
    tl.from(
      ".header-buttons",
      {
        opacity: 0,
        y: 100,
      },
      0.15
    );
  });
  return (
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
          <Button mode="primary">Start the Journey</Button>
          <Button mode="secondary">Join Us</Button>
        </div>
      </div>
      <div className="header-image">
        <img
          className="header-image__img"
          src="/header-img.png"
          alt="header image"
        />
      </div>
    </header>
  );
}
