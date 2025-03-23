import { IoLocationSharp, IoPeopleSharp } from "react-icons/io5";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GiLevelThree } from "react-icons/gi";
import Link from "../components/Link";
import Heading from "../components/Heading";
import { Element } from "react-scroll";
import "./About.scss";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutTopRef = useRef<HTMLDivElement>(null);
  const cardOneRef = useRef<HTMLDivElement>(null);
  const cardTwoRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from([aboutTopRef.current, cardOneRef.current, cardTwoRef.current], {
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      y: 100,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });
  return (
    <Element name="trips">
      <section ref={aboutRef} className="about container">
        <div ref={aboutTopRef} className="about-top">
          <div className="about-heading">
            <Heading
              headerClasses="about__header"
              header={`Extreme Expeditions`}
              paragraphClasses={`paragraph-heading about__paragraph`}
              paragraph={`Do you crave adventure, adrenaline,
            and untouched nature?`}
            ></Heading>
          </div>
          <div className="about-text">
            <p className="paragraphs-primary mb-5 about__description">
              Our extreme expeditions take you deep into the most mysterious
              corners of the world! Trek through dense jungles, explore hidden
              caves, and navigate lush rainforests for an unforgettable
              experience.
            </p>
            <Link classLink="about__link" href="contact">
              Ready for the adventure of a lifetime?
            </Link>
          </div>
        </div>
        <div className="about-bottom">
          <div ref={cardOneRef} className="about-card">
            <img
              className="about-card__image"
              src="/img-trip-forest.png"
              alt="Expedition through dense forest with exotic wildlife"
              loading="lazy"
            />
            <div className="about-card__content">
              <p className="about-card__description paragraphs-primary">
                This expedition is for true explorers! Traverse humid, dense
                forests filled with exotic wildlife and breathtaking scenery.
                Meet indigenous tribes, learn survival skills.
              </p>
              <h3 className="about-card__heading">
                <IoLocationSharp color="#88db55" size={20} /> Location: Amazon,
                Borneo, Congo
              </h3>
              <ul className="about-card__info">
                <li className="about-card__info-item">
                  <IoPeopleSharp color="#88db55" size={20} /> 4-8
                </li>
                <li className="about-card__info-item">
                  <MdOutlineAccessTimeFilled color="#88db55" size={20} /> 7-12
                  days
                </li>
                <li className="about-card__info-item">
                  <GiLevelThree color="#d13333" size={20} /> Hard
                </li>
              </ul>
            </div>
          </div>
          <div ref={cardTwoRef} className="about-card">
            <img
              className="about-card__image"
              src="/img-trip-caves.png"
              alt="Exploration of breathtaking caves and hidden tunnels"
              loading="lazy"
            />
            <div className="about-card__content">
              <p className="about-card__description paragraphs-primary">
                Descend into the depths of the earth and explore breathtaking
                caves and hidden tunnels. Expect climbing,
                <span> underground river diving</span>, and squeezing through
                narrow passages that will test your limits!
              </p>
              <h3 className="about-card__heading">
                <IoLocationSharp color="#88db55" size={20} /> Location: Mexico,
                Vietnam, Slovenia
              </h3>
              <ul className="about-card__info">
                <li className="about-card__info-item">
                  <IoPeopleSharp color="#88db55" size={20} /> 4-6
                </li>
                <li className="about-card__info-item">
                  <MdOutlineAccessTimeFilled color="#88db55" size={20} /> 5-9
                  days
                </li>
                <li className="about-card__info-item">
                  <GiLevelThree color="#d1a733" size={20} /> Medium
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
