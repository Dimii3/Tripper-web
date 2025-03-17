import { FaArrowRightLong } from "react-icons/fa6";
import "./About.scss";
import { IoLocationSharp, IoPeopleSharp } from "react-icons/io5";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GiLevelThree } from "react-icons/gi";
import Link from "../components/Link";

export default function About() {
  return (
    <section className="about container">
      <div className="about-top">
        <div className="about-heading">
          <h2 className="heading-2 mb-5">Extreme Expeditions</h2>
          <p className="paragraphs-primary">
            Do you crave adventure, adrenaline,
            <br />
            and untouched nature?
          </p>
        </div>
        <div className="about-text">
          <p className="paragraphs-primary mb-5">
            Our extreme expeditions take you deep into the most mysterious
            corners of the world! Trek through dense jungles, explore hidden
            caves, and navigate lush rainforests for an unforgettable
            experience.
          </p>
          <Link href="#">Ready for the adventure of a lifetime?</Link>
        </div>
      </div>
      <div className="about-bottom">
        <div className="about-card">
          <img
            className="about-card__image"
            src="/img-trip-forest.png"
            alt="Expedition through dense forest with exotic wildlife"
            loading="lazy"
          />
          <p className="about-card__description paragraphs-primary">
            This expedition is for true explorers! Traverse humid, dense forests
            filled with exotic wildlife and breathtaking scenery. Meet
            indigenous tribes, learn survival skills.
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
              <MdOutlineAccessTimeFilled color="#88db55" size={20} /> 7-12 days
            </li>
            <li className="about-card__info-item">
              <GiLevelThree color="#d13333" size={20} /> Hard
            </li>
          </ul>
        </div>
        <div className="about-card">
          <img
            className="about-card__image"
            src="/img-trip-caves.png"
            alt="Exploration of breathtaking caves and hidden tunnels"
            loading="lazy"
          />
          <p className="about-card__description paragraphs-primary">
            Descend into the depths of the earth and explore breathtaking caves
            and hidden tunnels. Expect climbing,
            <span> underground river diving</span>, and squeezing through narrow
            passages that will test your limits!
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
              <MdOutlineAccessTimeFilled color="#88db55" size={20} /> 5-9 days
            </li>
            <li className="about-card__info-item">
              <GiLevelThree color="#d1a733" size={20} /> Medium
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
