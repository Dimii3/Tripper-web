import "./Preloader.scss";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
export default function Preloader() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".preloader__text", {
      duration: 0.6,
      opacity: 1,
      stagger: 0.3,
    });
    tl.to(".preloader__wall", {
      scaleY: 1,
      transformOrigin: "top",
      duration: 2,
    });
  });
  return (
    <div className="preloader">
      <div className="preloader__text preloader__text--1">Your</div>
      <div className="preloader__text preloader__text--2">New</div>
      <div className="preloader__text preloader__text--3">Adventure</div>
      <div className="preloader__text preloader__text--4">Is</div>
      <div className="preloader__text preloader__text--5">Loading</div>
      <div className="preloader__wall"></div>
    </div>
  );
}
