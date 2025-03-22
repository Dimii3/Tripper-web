import { Element } from "react-scroll";
import Heading from "../components/Heading";
import "./Team.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Team() {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".team",
      start: "top bottom",
      end: "bottom center+=300",
      scrub: true,

      toggleActions: "play none none none",
      animation: gsap
        .timeline()
        .from(".team-top", {
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          y: 200,
        })
        .from(".team-card", {
          opacity: 0,
          y: 200,
          delay: 0.2,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
        }),
    });
  });
  return (
    <Element name="team">
      <section className="team container">
        <div className="team-top">
          <div className="team-top__heading">
            <Heading
              header="Meet Our Guides"
              paragraph="Our expert guides have spent years exploring the most extreme
            environments on Earth."
            ></Heading>
          </div>
          <p className="team-top__text">The Masters of Adventure</p>
        </div>
        <div className="team-bottom">
          <div className="team-card">
            <div className="team-card__avatar">
              <img src="/team-member-1.png" alt="Expedition Leader" />
            </div>
            <div className="team-card__content team-card__content--secondary">
              <h3 className="heading-3">Liam "Pathfinder" Carter</h3>
              <p className="paragraphs-primary">Expedition Leader</p>
            </div>
          </div>
          <div className="team-card team-card--reverse">
            <div className="team-card__content">
              <h3 className="heading-3">Ethan "Storm" Beckerr</h3>
              <p className="paragraphs-primary">Bushcraft Expert</p>
            </div>
            <div className="team-card__avatar">
              <img src="/team-member-2.png" alt="Expedition Leader" />
            </div>
          </div>
          <div className="team-card">
            <div className="team-card__avatar">
              <img src="/team-member-3.png" alt="Expedition Leader" />
            </div>
            <div className="team-card__content">
              <h3 className="heading-3">Sofia "Shadow" Navarro</h3>
              <p className="paragraphs-primary">Cave Specialist</p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
